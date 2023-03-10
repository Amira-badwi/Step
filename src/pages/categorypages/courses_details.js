import Card from "../../component/categoryComponent/course_card";

import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../../firebase";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export default function Courses_details(){
const param=useParams();
    const [courses,setCourses]=useState([])
    var  coursescategory=[]
    const coursesCollectionRef=collection(db,"courses")
    useEffect(()=>{
const getCourses=async()=>{
    const data=await getDocs(coursesCollectionRef);
    setCourses(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}
getCourses()

    },[] )
    coursescategory=courses.filter(itm=>itm.courseCategory===param.id)


    return(<>
    
    <div className="card m-auto  w-100 my-1"  >
{
    coursescategory.map((ele)=>{
        console.log(ele);
      return(
          <Card img={ele.courseImage} courseName={ele.courseName} courseDescription={ele.courseDescription} to={`/reviewCourse/${ele.id}`}/>
     )  
    })
}  
    </div>


    </>)
}