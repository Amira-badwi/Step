import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper'
import'swiper/css'
import'swiper/css/free-mode'
import course1 from '../../images/course1.jpg'
import {Card,Button} from 'react-bootstrap'
import cate2 from '../../images/cate2.jpg'
import'./CoursesSwipper.css'
import Carousel from 'react-bootstrap/Carousel';
import { collection, doc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase"
import { useHistory} from 'react-router-dom/cjs/react-router-dom'
import { Link } from "react-router-dom/cjs/react-router-dom.min"


 export default function CoursesSwipper() {
  
    const [courses,setCourses]=useState([])
    const coursesCollectionRef=collection(db,"courses")
    // console.log(coursesCollectionRef)
    useEffect(()=>{
const getCourses=async()=>{
    const data=await getDocs(coursesCollectionRef);
    // console.log(data)
    setCourses(data.docs.map((doc)=>({...doc.data(),id:doc.id})))

}
getCourses()
    },[] )


    const history=useHistory();

  const navigateToViewCourse = (id) => {
   history.push('/viewCourse');
  };
  
return(<><br/>
<h1 className="h1HomeCoursesStyle fw-bold mt-5">Explore Courses</h1>
{/* <Carousel fade> */}

<div className='container py-4 px-4 justify-content-center '>
    <div className='row'>
<Swiper
freeMode={true}
grabCursor={true}
modules={[FreeMode]}
className='mySwipper'

breakpoints={{
    0:{
        slidesPerView:1,
        spaceBetween:10,
    },
    480:{
        slidesPerView:2,
        spaceBetween:10,
    },
    768:{
        slidesPerView:3,
        spaceBetween:15,
    },
    1024:{
        slidesPerView:4,
        spaceBetween:15,
    },
    1280:{
        slidesPerView:4,
        spaceBetween:30,
    },
}}
>
  { courses.map((course)=>{
            return <SwiperSlide >
                
       <Link to={`/reviewCourse/${course.id}`}  className="text-decoration-none">    <div>
          
        <Card className='p-0 overflow-hidden h-100 shadow'>
<div className='overflow-hidden rounded p-0 bg-light'>
  <Card.Img variant='top' src={course.courseImage} style={{height:'200px'}}/>  
</div>

<Card.Body className='text-center'>
<Card.Title className='homeCourseCardTitle display-6 '>{course.courseName}</Card.Title>
<Card.Title className='text-dark' style={{height:'80px',fontSize:'17px'}}>{course.courseDescription}</Card.Title>
<button type="button" class="btn bgcolor rounded-pill w-5" onClick={navigateToViewCourse} >Enroll Now</button>
</Card.Body>
        </Card>  
       
         </div>
         </Link> 
         </SwiperSlide>
        
            
        }
       
        )
    }
   
</Swiper>

  </div>
 </div>
  {/* </Carousel> */}
  <br/> 
</>)





 }