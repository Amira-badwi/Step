import BookCategory from "../../component/categoryComponent/bookCategory";
import {db} from "../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";

import { useEffect, useState ,useContext } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { loadContext } from "../../component/context/langContext";
export default function Books_category(){
    const {contextload, setcontextload} =useContext(loadContext);

    const param=useParams()
    const [books,setbooks]=useState([{ bookImage:"",bookName:"no item" , 
    bookImage:""}]);
     const coursesCollectionRef=collection(db,"books")
     useEffect(()=>{
        setcontextload(true)
 const getCourses=async()=>{
     const data=await getDocs(coursesCollectionRef);
    
     setbooks(data.docs.map((doc)=>({...doc.data(),id:doc.id}))) 
     setcontextload(false)
    }
 getCourses()
     },[] )
 var    coursescategory=books.filter(itm=>itm.bookCategory===param.id)

    return(<>

      <div className="container-fluid">
     <div className="row m-auto">
{
coursescategory.map((item ,index)=>{
return(
   <div className=" col-lg-3 col-sm-6 col-md-4 col-6  " key={index}>

<BookCategory title={item.bookName} img={item.bookImage} pdf={item.book}/>
</div>
)})}
 </div>
    </div>
    </>)
}