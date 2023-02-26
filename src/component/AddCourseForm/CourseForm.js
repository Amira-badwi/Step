import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db, storage } from '../../firebase'
import CourseContent from './CourseContent'
import CourseInfo from './CourseInfo'
import {ref,uploadBytes,getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import { v4 } from 'uuid'
function CourseForm() {
    const [page,setPage]=useState(0)
    const formTitles=['Course Info','Course Curriclem']
    const [courseData,setCourseData]=useState({
        courseName:'',
        courseDescription:'',
        courseCategory:'',
        courseImage:'',
        courseSections:[]
    })
    const coursesCollectionRef=collection(db,"courses")
    const imageURL=`courseImages/${courseData.courseImage.name+v4()}`

    const handleNext=async(e)=>{
        setPage((current)=>(current+1))
        const imageRef=ref(storage,imageURL);
        const imageUpload=uploadBytesResumable(imageRef,courseData.courseImage);
        ////buggy
        imageUpload.then(()=>{
            console.log('image uploaded!');
            getDownloadURL(imageUpload.snapshot.ref).then(
                (url)=>{
                    console.log(url);
                setCourseData({...courseData,courseImage:url})
                }
            )
        })
        
    }

    const handleSubmit=async (e)=>{
    
await addDoc(coursesCollectionRef,courseData)

    }
    return (
        <div>
            <div className="add-course-container col-lg-7 col-12" style={{marginTop:60}}>
            <div className="progress mb-3">
                <div style={{width:page==0?"50%":"100%"}} className="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h1 className='text-center'>{formTitles[page]}</h1>
            <form onSubmit={(e)=>{e.preventDefault()}}>
            {page==0?<CourseInfo courseData={courseData} setCourseData={setCourseData}/>:<CourseContent courseData={courseData} setCourseData={setCourseData}/>}
            <button className='btn btn-primary me-3' disabled={page==0} onClick={()=>{setPage((current)=>(current-1))}}>Prev</button>
            <button className='btn btn-primary me-3' onClick={()=>{(formTitles.length-1)==page?handleSubmit():handleNext()}}>{(formTitles.length-1)==page?'Submit':'Next'}</button>
            </form>
        </div>
        </div>
    )
}

export default CourseForm