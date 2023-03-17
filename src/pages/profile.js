import React, { useContext, useEffect, useState } from 'react';
import "./profile.css";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import HeadProfile from '../component/profile/secondhead';
 
import logo from "../assets/Teaching strategy.webp";
import logo1 from "../assets/evaluation methods.webp";
import logo2 from "../assets/Mental skills.jpeg";
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { AuthContext } from '../component/context/AuthContext';
import { async } from '@firebase/util';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
 
export default function Profile() {
  const currentUse=useContext(AuthContext)
  const currentValue=currentUse.currentUser;
  const currentData=currentUse.userData;
 
const [image,setImage]=useState("https://upload.wikimedia.org/wikipedia/commons/2/24/Crystal_personal.svg")
const [photo,setPhoto]=useState(null)
const handleChange=(e)=>{
 
  
  setPhoto(e.target.files[0])
  
 console.log(e.target.files[0])
console.log(photo)
}



async function upload(file,currentValue){
  const fileRef=ref(storage,'imagesCard/'+currentValue.displayName)
  const snapshot= await uploadBytes(fileRef , file);
     const photoURL=await getDownloadURL(fileRef)
     setImage(photoURL)
     updateProfile(currentValue,{photoURL})
     const reviewDoc=doc(db,"users",currentValue.uid);
     await updateDoc(reviewDoc ,photoURL);
  
}
const handleUpdate=()=>{
  console.log(photo)
  upload(photo,currentValue)

};

useEffect(()=>{
  if(currentValue?.photoURL)
  {
    setImage(currentValue.photoURL)
  }
},[currentValue])


  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-1">
         
        <MDBRow className="justify-content-center align-items-center " >
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4   d-flex flex-column" style={{ width: '170px' }}>
 
                  <img
                   src={image}
                    alt="Generic placeholder image" className="mt-4  img-thumbnail" fluid style={{ width: '150px',height:"200px", zIndex: '1' }} />
 
 </div>
 

 
        <div  style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{currentValue.displayName}</MDBTypography>
                  <MDBCardText >egypt</MDBCardText>
                </div>

              </div>
             
              <MDBCardBody className="text-black p-3">
              <form className="editProfile m-2"  onSubmit={(e)=>e.preventDefault()}>    
    
    <input type="file" style={{display:"none"}} accept="image/*" name="image" id="img" onChange={(e)=>handleChange(e)} />
   <label htmlFor="img" className="diff m-2">
    <span>change photo</span>  <img src={require('../assets/choosephoto.jpg')} width="50px"   style={{cursor:"pointer" ,color:"white"}} name="image" id="img"  />
    </label>
    
  <button className='btn btn-outline-dark m-2' type="submit" onClick={handleUpdate}>Done</button>


</form>
             
 
 
                <div className="mb-5">
                  {/* <p className="lead fw-normal  pt-5"  onClick ={()=>edit()}>About</p> */}
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    
                    <MDBCardText className="font-italic mb-1">{currentValue.displayName}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">{currentValue.email}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">This user is {currentData.user}</MDBCardText> 
                     <MDBCardText className="font-italic mb-1">specialization is {currentData.specialization}</MDBCardText> 


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
                <HeadProfile name="courses added"/>
                <HeadProfile name="Saved Books"/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}