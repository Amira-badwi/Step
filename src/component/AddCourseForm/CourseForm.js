import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { db, storage } from '../../firebase'
import CourseContent from './CourseContent'
import CourseInfo from './CourseInfo'
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { v4 } from 'uuid'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import ContentType from './ContentType'
import BookInfo from './BookInfo'
function CourseForm() {
    const currentUse = useContext(AuthContext);
    const history = useHistory()
    const currentValue = currentUse.currentUser.displayName;
    // const [addedCourse,setAddedCourse]=useState({})
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [contentType, setContentType] = useState("")
    const [contentTypeErr, setContentTypeErr] = useState(null)
    const secondPage = contentType == 'book' ? 'Book Info' : 'Course Info'
    const formTitles = ['Content Type', secondPage, 'Course Curriclem']
    const [courseData, setCourseData] = useState({
        courseName: '',
        courseDescription: '',
        courseCategory: '',
        courseImage: '',
        courseSections: [],
        courseReviews: []
    })
    const [courseErrs, setCourseErrs] = useState({
        courseName: null,
        courseDescription: null,
        courseCategory: null,
        courseImage: null,
        courseSections: null
    })
    const [bookData, setBookData] = useState({
        bookName: '',
        bookDescription: '',
        bookCategory: '',
        bookImage: '',
        book: '',
        bookReviews: []
    })
    const [bookErrs, setBookErrs] = useState({
        bookName: null,
        bookDescription: null,
        bookCategory: null,
        bookImage: null,
        book: null
    })
    const coursesCollectionRef = collection(db, "courses")
    const booksCollectionRef = collection(db, "books")
    const imageURL = `courseImages/${courseData.courseImage.name + v4()}`
    const bookImageURL = `booksImages/${bookData.bookImage.name + v4()}`
    const bookURL = `books/${bookData.book.name + v4()}`

    const handleNext = (e) => {
        if (page == 1 && contentType == 'course') {
            if (courseData.courseCategory === "" || courseData.courseImage === "" || courseData.courseName == "" || courseData.courseDescription == '') {
                setCourseErrs({ courseDescription: courseData.courseDescription == "" ? 'this field is required' : '', courseName: courseData.courseName == "" ? 'this field is required' : courseErrs.courseName, courseCategory: courseData.courseCategory == '' ? 'this field is required' : courseErrs.courseName, courseImage: courseData.courseImage == '' ? 'this field is required' : '' })
            } else if (courseErrs.courseName !== '') { }
            else if (courseErrs.courseDescription !== '') { }
            else {
                setPage((current) => (current + 1))
            }
        }
        else if (page == 0) {
            if (contentType == '') {
                console.log('yes it was this stupid typo');
                setContentTypeErr("This field is required")
            }
            else { setPage((current) => (current + 1)) }
        } else { setPage((current) => (current + 1)) }
    }

    const handleSubmit = async (e) => {
        if (contentType == 'course') {
            const imageRef = ref(storage, imageURL);
            const imageUpload = uploadBytesResumable(imageRef, courseData.courseImage);
            let course = {}
            course = { ...courseData, courseCreator: currentValue }
            setIsLoading(true)
            imageUpload.then(() => {
                console.log('image uploaded!');
                getDownloadURL(imageUpload.snapshot.ref).then(
                    async (url) => {
                        course = { ...course, courseImage: url }
                        const addedCourse = await addDoc(coursesCollectionRef, course)
                        setIsLoading(false)
                        history.push(`/courseEnroll/${addedCourse.id}`)
                    }
                )
            })
        } else {
            console.log("Are we here");
            if (bookData.bookCategory === "" || bookData.bookImage === "" || bookData.book === "" || bookData.bookName == "" || bookData.bookDescription == '') {
                setBookErrs({ book: bookData.book == "" ? "this field is required" : "", bookDescription: bookData.bookDescription == "" ? 'this field is required' : '', bookName: bookData.bookName == "" ? 'this field is required' : bookErrs.bookName, bookCategory: bookData.bookCategory == '' ? 'this field is required' : bookErrs.bookName, bookImage: bookData.bookImage == '' ? 'this field is required' : '' })
            } else if (bookErrs.bookName !== '') { }
            else if (bookErrs.bookDescription !== '') { }
            else {
                const bookImageRef = ref(storage, bookImageURL);
                const bookRef = ref(storage, bookURL);
                const bookImageUpload = uploadBytesResumable(bookImageRef, bookData.bookImage);
                const bookUpload = uploadBytesResumable(bookRef, bookData.book);
                let book = {}
                book = { ...bookData, bookCreator: currentValue }
                setIsLoading(true)
                bookImageUpload.then(() => {
                    console.log('image uploaded!');
                    getDownloadURL(bookImageUpload.snapshot.ref).then(
                        async (url) => {
                            book = { ...book, bookImage: url }
                            bookUpload.then(() => {
                                console.log("book uploaded")
                                getDownloadURL(bookUpload.snapshot.ref).then(
                                    async (url) => {
                                        book = { ...book, book: url }
                                        const addedBook = await addDoc(booksCollectionRef, book)
                                        setIsLoading(false)
                                    }
                                )
                            })
                        }
                    )
                })
                console.log(bookData);
                console.log("Yay!!!");
            }
        }
    }

    const handleContentType = (e) => {
        setContentType(e.target.value)
        setContentTypeErr(e.target.value == "" ? "This Field is Required" : '');
        console.log(contentType);
    }
    return (
        <div>
            <div className="add-course-container col-lg-7 col-12" >
                <div className="progress mb-3">
                    <div style={{ width: page == 0 ? "30%" : page == 2 || (page == 1 && contentType == 'book') ? "100%" : "60%" }} className="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h1 className='text-center'>{formTitles[page]}</h1>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    {page == 0 ? <ContentType handleContentType={handleContentType} contentTypeErr={contentTypeErr} /> : (page == 1 && contentType == 'course') ? <CourseInfo courseErrs={courseErrs} setCourseErrs={setCourseErrs} courseData={courseData} setCourseData={setCourseData} /> : (page == 1 && contentType == 'book') ? <BookInfo bookData={bookData} setBookData={setBookData} bookErrs={bookErrs} setBookErrs={setBookErrs} /> : <CourseContent courseErrs={courseErrs} setCourseErrs={setCourseErrs} courseData={courseData} setCourseData={setCourseData} />}
                    <button className='btn btn-primary me-3' disabled={page == 0} onClick={() => { setPage((current) => (current - 1)) }}>Prev</button>
                    <button className='btn btn-primary me-3' onClick={() => { (formTitles.length - 1) == page || (page == 1 && contentType == 'book') ? handleSubmit() : handleNext() }}>{isLoading ? <div className="mx-3 spinner-border spinner-border-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div> : (formTitles.length - 1) == page || (page == 1 && contentType == 'book') ? 'Submit' : 'Next'}</button>
                </form>
            </div>
        </div>
    )
}

export default CourseForm