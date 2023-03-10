/* eslint-disable no-redeclare */
import "./banner.css";
import {Link, useParams} from "react-router-dom";
import { useState } from "react";


import Form from "../form/Form";
import ReviewList from "../reviewlist/ReviewList";


import {db} from "../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";

import ProductDescription from "../productdescription/ProductDescription";
import Header from "../header/Header";
import { useEffect } from "react";
import photo2 from '../../assets/Step.png'
import LineSection from "./Line";


const Banner = () => {




    const [reviews,setReviews] = useState([]);

    const addReview = (review) => {
      setReviews([review, ...reviews]);
  
    }



    // start new add two


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

{/* <div > */}
    {/* <Header /> */}
    {/* <div className="product-wrapper">
        <div className="product-image-wrapper">
    <img src={ele.courseImage} alt=""  />
        </div> */}

        {/* <div className="product-info">
            <h1 className="product-title">{ele.courseName}</h1> */}
            {/* <Rating rating={course.rating} reviews={course.reviews} /> */}
            {/* <div className="product-add-to-cart">
    
            <button className="add-to-cart-btn">
               Enroll in the course
            </button>
            </div>
            </div>
    </div>
    <ProductDescription />
    <Form addReview= {addReview}/>
    <ReviewList  reviews={reviews}/>


</div> */}
<div className="coursebackground">
    {/* <div className="container">
        <div className="row">
            <div className="col-6">
    <p className="coursepartof">This course is part of {ele.courseCategory}</p>
<h2 className="coursepriviewTitle">{ele.courseName}</h2>
<div>
<div className="circle ">
    <img src={ele.courseImage} alt="instructor image not found"/>
</div>
</div>
<button type="button" class="btn bgcolor rounded-pill w-5">Enroll for free</button>
</div>




</div>
<div className="col-2">
    <p>sddddd</p>
</div>
</div> */}
<div className="container text-center mt-3">
    <div className="row">
      <div className="col-12 mt-5 col-md-6 col-lg-6 m-auto">
        <p className="coursepartof" >
        This course is part of {ele.courseCategory}
        </p>
        <h2 className="coursepriviewTitle" >
        {ele.courseName}
        </h2>
        
          <br/>
          <button type="button" className="btn bgcolor rounded-pill w-5" >
        Enroll for free</button>
        </div>
        <div className="col-6 d-none d-lg-block">
            <div>
            <img 
             className="d-block w-100  logoStyle"
             src={photo2}
             alt="step photo"
            />
            </div>
        </div>
    </div></div><br/><br/>
</div>
<br/>
<div className="container">
    <div className="row">
        <div className="col-9 spansStyle">
            <span>
                <Link to='#About'/>
              About
            </span>
            <span className="spanInstructor">
           Instructor
            </span>
           
            <span className="spanInstructor">
           Review
            </span>
            
        </div>
    </div>
</div>
<LineSection/>
<h3 className="Aboutthiscourse" id="About">
    About this course
</h3>
<p className="reviewparagraphs">{ele.courseDescription}</p>
<LineSection/>
<div className="row mt-2">
<div className="col-8 ">
    <h3 className="Aboutthiscourse">
        Instructor
    </h3>
   <p className="reviewparagraphs">{ele.courseCreator}</p>
</div>
</div>
<LineSection/>
<h3 className="Aboutthiscourse" id="Review">
        Review
    </h3>
<Form addReview= {addReview}/>
    <ReviewList  reviews={reviews}/>
    {/* <Rating rating={course.rating} reviews={course.reviews} /> */}
<LineSection/>
<h3 className="Aboutthiscourse" id="offer">
    Offered By
</h3>
<div class="card mb-3" style={{height:'300px'}}>
  <div class="row g-0" style={{height:'300px'}}>
    <div class="col-md-4" style={{height:'300px'}}>
      <img  src={photo2}  alt="step photo" class="img-fluid rounded-start" style={{backgroundColor:'',height:'300px',marginTop:'20px'}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{textAlign:'center',marginTop:'50px'}}>
        <h5 class="card-title offerdTitle">Step</h5>
        <p class="card-text reviewparagraphs"> We train, qualify and enable the teacher to teach the new curriculum edu 2.0 by providing the teacher with courses, books and articles by experts in the field and also professional curriculums through our platform that will be always available for him. and give him certificates by the end of each course that will be added points to give him rewards and boosters</p>
      </div>
    </div>
  </div>
</div>
</>)

    })
}
 </>) 
}
export default Banner;