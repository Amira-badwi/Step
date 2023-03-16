import "./banner.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import Form from "../form/Form";
import ReviewList from "../reviewlist/ReviewList";
import { db } from "../../firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import photo2 from '../../assets/Step.png'
import LineSection from "./Line";
import { loadContext } from "../context/langContext";
import { AuthContext } from "../context/AuthContext";
import { stringify } from "@firebase/util";
const Banner = () => {
  const [coursesEnroll,setCoursEnroll]=useState("");

  const currentUse=useContext(AuthContext)
  var currentDataCourses=[];
  const currentValue=currentUse.currentUser;
  const currentData=currentUse.userData;
  const  [flag,setflag] =useState(false);
  const {contextload, setcontextload} =useContext(loadContext);

const enroll= async(idd,coursesUser ,element)=>
  {
  const reviewDoc= doc(db,"users",idd);
  const newfield={coursesUser:[...coursesUser,element]};
  await updateDoc(reviewDoc ,newfield);

  setflag(true)
}


  //list reviews
  const [reviews, setReviews] = useState([]);
    const [courses,setCourses]=useState([]);
    const coursesCollectionRef=collection(db,"courses");
    const {id} = useParams();
    var course ={};
    useEffect(()=>{  setcontextload(true)
const getCourses=async()=>{
  const data=await getDocs(coursesCollectionRef);
    setCourses(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    setcontextload(false)
}
getCourses()

if(currentUse.userData.booksUser !==undefined)
{   
  currentDataCourses=currentUse.userData.coursesUser;
setCoursEnroll( currentDataCourses.filter(ele=>ele.id==id))
console.log(coursesEnroll)
}
 } ,[currentUse])
 var course= courses.filter(item=> item.id===id)   

  return (<>
  { 
    course.map((ele)=>{
return(<>
<div className="container ms-2">
<div className="coursebackground">
<div className="container text-center mt-3 ">
    <div className="row">

      <div className="col-12 mt-5 col-md-6 col-lg-6 m-auto ">
        <p className="coursepartof mt-5 w-100" >
        This course is part of {ele.courseCategory}
        </p>
     
        <h4 className="coursepriviewTitle" >
        {ele.courseName}
        </h4>
          <br/>
        { flag==false &&
            <button type="button" className="btn bgcolor rounded-pill w-5" onClick={()=>enroll(currentValue.uid,currentData.coursesUser ,ele)}>
            Enroll for free</button>
        }
        { flag==true &&
      <Link to={`/CourseEnroll/${ele.id}`}>      <button type="button" className="btn bgcolor rounded-pill w-5" >
            open</button> </Link>
        }
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
<div style={{ alignItems:"center", textAlign:"center"}} className="container ">
    <div className="row">
        <div className="  spansStyle">
            <span>
                <Link to='#About'>
              About </Link>
            </span>
            <span className="spanInstructor">
            <Link to='#Review'>
           Review </Link>
            </span>
            <span className="spanInstructor">

         <Link to="#Instructor">
         Instructor  
         </Link>   
          
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
<div  >
    <h3 className="Aboutthiscourse" id ="Instructor">
        Instructor
    </h3>
   <p className="reviewparagraphs">{ele.courseCreator}</p>
</div>
</div>
<LineSection/>
<h3 className="Aboutthiscourse" id="Review">
        Review
    </h3>
{
  flag==true && <Form addReview= {setReviews}  ele={ele}/>
}
    <ReviewList  reviews={[...ele.courseReviews,reviews]}/>
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
      <div className="card-body" style={{textAlign:'center',marginTop:'50px'}}  >
        <h5 class="card-title offerdTitle">Step</h5>
        <p class="card-text reviewparagraphs"> We train, qualify and enable the teacher to teach the new curriculum edu 2.0 by providing the teacher with courses, books and articles by experts in the field and also professional curriculums through our platform that will be always available for him. and give him certificates by the end of each course that will be added points to give him rewards and boosters</p>
      </div>
    </div>
  </div>
</div></div>
</>)

  
      })
    }
  </>)
}
export default Banner;