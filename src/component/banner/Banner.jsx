import "./banner.css";

// start new add two
import {useParams} from "react-router-dom";
import { useState } from "react";
import {db} from "../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";


// import Form from "../form/Form";
// end new add two

import { products } from "../../data/products";
import Rating from "../rating/Rating";
import ProductDescription from "../productdescription/ProductDescription";
import Header from "../header/Header";
import { useEffect } from "react";


const Banner = () => {

    // start new add two
    const [courses,setCourses]=useState([])
    const coursesCollectionRef=collection(db,"courses")
    useEffect(()=>{
const getCourses=async()=>{
    const data=await getDocs(coursesCollectionRef);
    setCourses(data.docs.map((doc)=>({...doc.data(),id:doc.id})))

}
getCourses()
    },[] )




    const {id} = useParams();
    const course = courses.find(p => p.id === id);
    // end new add two

    return (
    <div className="single-product">
        <Header />
        <div className="product-wrapper">
            <div className="product-image-wrapper">
               <img src={course.courseImage} alt=""  />
            </div>
            <div className="product-info">
                <h1 className="product-title">{course.courseName}</h1>
                {/* <Rating rating={course.rating} reviews={course.reviews} /> */}
                
                <div className="product-add-to-cart">
        
                <button className="add-to-cart-btn">
                   Enroll in the course
                </button>
                </div>
                </div>
        </div>
        <ProductDescription />
       
       



                



    </div> );
}
 
export default Banner;