/* eslint-disable no-redeclare */
import "./banner.css";
import {useParams} from "react-router-dom";
import { useState } from "react";
import {db} from "../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import ProductDescription from "../productdescription/ProductDescription";
import Header from "../header/Header";
import { useEffect } from "react";

const Banner = () => {
    const [courses,setCourses]=useState([]);
    const coursesCollectionRef=collection(db,"courses");
    
    const {id} = useParams();
    var course ={};
    useEffect(()=>{
const getCourses=async()=>{
    const data=await getDocs(coursesCollectionRef);
    setCourses(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
   
}
getCourses()
 },[] )
var course= courses.filter(item=> item.id==id)


  
   
  return (<>
  {
    course.map((ele)=>{

return(<>

<div >
    <Header />
    <div className="product-wrapper">
        <div className="product-image-wrapper">
    <img src={ele.courseImage} alt=""  />
        </div>
        <div className="product-info">
            <h1 className="product-title">{ele.courseName}</h1>
            {/* <Rating rating={course.rating} reviews={course.reviews} /> */}
            <div className="product-add-to-cart">
    
            <button className="add-to-cart-btn">
               Enroll in the course
            </button>
            </div>
            </div>
    </div>
    <ProductDescription />

</div>
</>)

    })
}
 </>) 
}
export default Banner;