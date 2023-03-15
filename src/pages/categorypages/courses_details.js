import Card from "../../component/categoryComponent/course_card";

import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../../firebase";
import { useEffect, useState ,useContext } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { loadContext } from "../../component/context/langContext";
export default function Courses_details(){
    const {contextload, setcontextload} =useContext(loadContext);

const param=useParams();
    const [courses,setCourses]=useState([])
    var  coursescategory=[]
    const coursesCollectionRef=collection(db,"courses")
    useEffect(()=>{
       setcontextload(true) 
const getCourses=async()=>{
    const data=await getDocs(coursesCollectionRef);
    setCourses(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    setcontextload(false)
}
getCourses()

    },[] )
    coursescategory=courses.filter(itm=>itm.courseCategory===param.id)

return(<>
    
    <div className="card m-auto  w-100 my-1"  >
{
    coursescategory.map((ele)=>{
      return(
          <Card img={ele.courseImage} courseName={ele.courseName} courseDescription={ele.courseDescription} to={`/reviewCourse/${ele.id}`}/>
     )  
    })
}  
    </div>
    </>)
}