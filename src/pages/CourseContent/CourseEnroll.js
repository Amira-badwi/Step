import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../firebase';
import CourseSection from './CourseSection';

function CourseEnroll() {
  const [course, setCourse] = useState({
    courseName: '',
    courseDescription: '',
    courseCategory: '',
    courseImage: '',
    courseSections: []
  })
  const params = useParams()
  const id = params.id
  const docRef = doc(db, "courses", id);
  useEffect(() => {
    // const 
    const getCourse = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setCourse(docSnap.data())
        console.log(course);
      } else {
        console.log("No such document!");
      }
    }
    getCourse()

  }, [])
  return (
    <div className='container'>
      <div><h1>{course.courseName}</h1></div>
      {course.courseSections.map((section, index) => <CourseSection index={index} section={section} />)}
    </div>
  )
}

export default CourseEnroll