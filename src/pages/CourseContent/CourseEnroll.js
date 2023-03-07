import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../firebase';

function CourseEnroll() {
  const [course, setCourse] = useState()
  const params = useParams()
  const id = params.id
  const docRef = doc(db, "courses", id);
  useEffect(() => {
    // const 
    const getCourse = async () => {
      const docSnap = await getDoc(docRef);
      setCourse(docSnap)
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getCourse()

  }, [])
  return (
    <div><h1>{id}</h1></div>
  )
}

export default CourseEnroll