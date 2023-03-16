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
     const booksCollectionRef=collection(db,"books")
     useEffect(()=>{
        setcontextload(true)
 const getCourses=async()=>{
     const data=await getDocs(booksCollectionRef);
    
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
   console.log(item);
return(
   <div className=" col-lg-3  col-md-6 col-12  " key={index}>

<BookCategory element={item}/>
</div>
)})}
 </div>
    </div>
    </>)
}