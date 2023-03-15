import { collection, doc, getDocs } from "firebase/firestore"
import { useEffect, useState ,useContext } from "react"
import { db } from "../../firebase"
import { loadContext } from "../context/langContext";

export default function FireList(){
    const {contextload, setcontextload}=useContext (loadContext);

    const [courses,setCourses]=useState([])
    const coursesCollectionRef=collection(db,"3")
    // console.log(coursesCollectionRef)
    useEffect(()=>{
        setcontextload(true)
const getCourses=async()=>{
    const data=await getDocs(coursesCollectionRef);
    // console.log(data)
    setCourses(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    setcontextload(false)
}
getCourses()

    },[] )
    return(
        <>
        
        {courses.map((course)=>{
            return<div>{course.todo}
            </div>
        }

        )}
        </>
    )
}