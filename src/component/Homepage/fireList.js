import { collection, doc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase"

export default function FireList(){
    const [courses,setCourses]=useState([])
    const coursesCollectionRef=collection(db,"3")
    // console.log(coursesCollectionRef)
    useEffect(()=>{
const getCourses=async()=>{
    const data=await getDocs(coursesCollectionRef);
    // console.log(data)
    setCourses(data.docs.map((doc)=>({...doc.data(),id:doc.id})))

}
getCourses()
    },[] )
    return(
        <>
        <p>hhhhh</p>
        {courses.map((course)=>{
            return<div>{course.todo}
            </div>
        }

        )}
        </>
    )
}