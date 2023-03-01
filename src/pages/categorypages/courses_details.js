import Card from "../../component/categoryComponent/course_card";
import logo1 from "../../assets/special-need-child.jpeg";
import logo2 from "../../assets/special-need-child3.jpeg";
import logo3 from "../../assets/special-need-child4.jpeg";
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../../firebase";
import { useEffect, useState } from "react"


export default function Courses_details(){
    const [courses,setCourses]=useState([])
    const coursesCollectionRef=collection(db,"courses")
    useEffect(()=>{
const getCourses=async()=>{
    const data=await getDocs(coursesCollectionRef);
    setCourses(data.docs.map((doc)=>({...doc.data(),id:doc.id})))

}
getCourses()
    },[] )



    return(<>
    
    <div className="card m-auto  w-100 my-1"  >
{
    courses.map((ele)=>{
      return(
          <Card img={ele.courseImage} courseName={ele.courseName} courseDescription={ele.courseDescription} to="/viewCourse"/>

     )  
    })
}  
    </div>


    </>)
}