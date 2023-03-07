import React, { useContext, useEffect, useState } from 'react';
import "./profile.css";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import HeadProfile from '../component/profile/secondhead';
import EditProfile from '../component/profile/edit';
import logo from "../assets/Teaching strategy.webp";
import logo1 from "../assets/evaluation methods.webp";
import logo2 from "../assets/Mental skills.jpeg";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../component/context/AuthContext';


export default function Profile() {
  const currentUse=useContext(AuthContext)
  const currentValue=currentUse.currentUser;
  //console.log(JSON.stringify (currentValue.metadata))
  const [Users,setusers]=useState([])
  const coursesCollectionRef=collection(db,"users")
  useEffect(()=>{
const getCourses=async()=>{
  const data=await getDocs(coursesCollectionRef);
  setusers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))

}
 

getCourses()
  },[] )
  // console.log(Users[0].displayName);
  
  
const [flag,setflag]=useState(false)
function edit(){
if(flag==false){
  setflag(true)
}
else{
  setflag(false)
}

}

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-1">
        <MDBRow className="justify-content-center align-items-center ">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '170px' }}>
                  <MDBCardImage src={currentValue.photoURL}
                    alt="Generic placeholder image" className="mt-4  img-thumbnail" fluid style={{ width: '150px',height:"200px", zIndex: '1' }} />
                </div>
                <div  style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{currentValue.displayName}</MDBTypography>
                  <MDBCardText >egypt</MDBCardText>
                </div>

              </div>
             
              <MDBCardBody className="text-black p-3">
<div id="edit">
<button className='btn btn-outline-dark  m-4 ' onClick ={()=>edit()} > 
{
  flag==false? "Edit profile":"update"
}
 </button>
{
  flag?<EditProfile/> :null
}
</div>
                <div className="mb-5">
                  <p className="lead fw-normal  pt-5"  onClick ={()=>edit()}>About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">{currentValue.displayName}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">{currentValue.email}</MDBCardText>
                  </div>
                </div>
                <HeadProfile name="enroll courses"/>

                
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src={logo2}
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src={logo1}
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <HeadProfile name=" courses added"/>
                <HeadProfile name=" Saved Books"/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}