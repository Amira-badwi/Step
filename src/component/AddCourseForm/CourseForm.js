import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { db, storage } from '../../firebase'
import CourseContent from './CourseContent'
import CourseInfo from './CourseInfo'
import {ref,uploadBytes,getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import { v4 } from 'uuid'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
function CourseForm() {
    const currentUse = useContext(AuthContext);
    const history=useHistory()
    const currentValue = currentUse.currentUser.displayName;
// const [addedCourse,setAddedCourse]=useState({})
    const [page,setPage]=useState(0)
    const [isLoading,setIsLoading]=useState(false)
    const formTitles=['Course Info','Course Curriclem']
    const [courseData,setCourseData]=useState({
        courseName:'',
        courseDescription:'',
        courseCategory:'',
        courseImage:'',
        courseSections:[]
    })
    const [courseErrs,setCourseErrs]=useState({
        courseName:null,
        courseDescription:null,
        courseCategory:null,
        courseImage:null,
        courseSections:null
    })
    const coursesCollectionRef=collection(db,"courses")
    const imageURL=`courseImages/${courseData.courseImage.name+v4()}`

    const handleNext=(e)=>{
        if (courseData.courseCategory==="" || courseData.courseImage==="" ||courseData.courseName==""||courseData.courseDescription==''){
            setCourseErrs({courseDescription:courseData.courseDescription==""?'this field is required':'',courseName:courseData.courseName==""?'this field is required':courseErrs.courseName,courseCategory:courseData.courseCategory==''?'this field is required':courseErrs.courseName,courseImage:courseData.courseImage==''?'this field is required':''})
        }else if(courseErrs.courseName!==''){}
        else if(courseErrs.courseDescription!==''){}
        else{
        setPage((current)=>(current+1))}
    }

    const handleSubmit=async (e)=>{
        
        const imageRef=ref(storage,imageURL);
        const imageUpload=uploadBytesResumable(imageRef,courseData.courseImage);
        let course={}
        course={...courseData,courseCreator:currentValue}
        setIsLoading(true)
        imageUpload.then(()=>{
            console.log('image uploaded!');
            getDownloadURL(imageUpload.snapshot.ref).then(
                async (url)=>{
                    course={...course,courseImage:url}
                const addedCourse=await addDoc(coursesCollectionRef,course)
                setIsLoading(false)
                history.push(`/courseEnroll/${addedCourse.id}`)
                }
            )
        })

    }
    return (
        <div>
            <div className="add-course-container col-lg-7 col-12" >
            <div className="progress mb-3">
                <div style={{width:page==0?"50%":"100%"}} className="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h1 className='text-center'>{formTitles[page]}</h1>
            <form onSubmit={(e)=>{e.preventDefault()}}>
            {page==0?<CourseInfo courseErrs={courseErrs} setCourseErrs={setCourseErrs} courseData={courseData} setCourseData={setCourseData}/>:<CourseContent courseErrs={courseErrs} setCourseErrs={setCourseErrs} courseData={courseData} setCourseData={setCourseData}/>}
            <button className='btn btn-primary me-3' disabled={page==0} onClick={()=>{setPage((current)=>(current-1))}}>Prev</button>
            <button className='btn btn-primary me-3' onClick={()=>{(formTitles.length-1)==page?handleSubmit():handleNext()}}>{isLoading?<div className="mx-3 spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:(formTitles.length-1)==page?'Submit':'Next'}</button>
            </form>
        </div>
        </div>
    )
}

export default CourseForm