import { collection, getDocs } from "firebase/firestore";
import { MDBCardText } from "mdb-react-ui-kit";
import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import BookCategory from "../categoryComponent/bookCategory";
import { AuthContext } from "../context/AuthContext";
import Card from "./../categoryComponent/course_card"
function HeadProfile(props) {
  const currentUse=useContext(AuthContext)
  
  var currentData=[{bookImage:"" ,bookName:"" ,book:"" ,id:0}];
 
  var currentDataCourses=[];

  if(currentUse.userData.booksUser !==undefined)
  {
    currentData=currentUse.userData.booksUser;
  }
  if(currentUse.userData.coursesUser !==undefined)
  {
    currentDataCourses=currentUse.userData.coursesUser;
  }

 
 
   
 

     return ( <>
     <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">{props.name}</MDBCardText>

                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                  </div>
             <div className="bg-danger w-100 d-flex">
        {  props.name=="Saved Books" &&  currentData.map(ele=>
         {     return(<>
              <div className=" col-lg-6  col-md-6 col-12  " >
   <BookCategory element={ele}  saved="true"/> 
              </div>
              </>)}
)
      
      }</div>
  <div className="bg-danger w-100 ">
{  props.name=="courses added"&&  currentDataCourses.map(ele=>
         {     return(<>
              <div className=" col-lg-12  col-md-12 col-12  " >
<Card img={ele.courseImage} courseName={ele.courseName}  courseDescription={ele.courseDescription} to={`/enrolreviewCourse/${ele.id}`} />
              </div>
              </>)}
)
      
      } </div>


             
              
    </> );
}

export default HeadProfile;