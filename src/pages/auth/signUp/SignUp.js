import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form } from "react-bootstrap";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../../firebase";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import Pg1 from "./Pg1";
import "./SignUp.css";
import Pg2 from "./Pg2";
import Pg3 from "./Pg3";
function Sign_Up() {
  const [Page, setPage] = useState(1);
  const [Prog, setProg] = useState(40);
  const changePageinc = () => {
    const prog = Prog + 30;
    setProg(prog);
    const nextPge = Page + 1;
    setPage(nextPge);
  };
  const changePagedec = () => {
    const prog = Prog - 30;
    setProg(prog);
    const backPge = Page - 1;
    setPage(backPge);
  };
  ////////////////handleData/////////////
  const [userData, setuserData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    NID: null,
    administration:"",
    school:"",
    yearsNo:null,
    Graduation:0,
    specialization:"",
    phone:"",
    user:""

  });
  const [error, setError] = useState({
    userName: null,   
    email: null,
    password: null,
    confirmPassword: null,
    image: null,
    NID: null,
    specialization:null,
    phone:null,
  });
  //////////////////handleSubmit////////////////
  const [err, setErr] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(e.target[0])
    console.log(userData)
     
      const displayName = userData.userName;
      const email = userData.email;
      const password = userData.password;
      const displayConfPassword = userData.confirmPassword;
      const displayNID = userData.NID;
      const file = userData.image;
      const administration=userData.administration;
      const yearsNo=userData.yearsNo;
      const school=userData.school;
      const specialization=userData.specialization;
      const phone=userData.phone;
      const user=userData.user;
      const graduate=userData.Graduation;
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        const storageRef = ref(
          storage,
          displayName,
          
        );
  //console.log(res.user)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          (error) => {
            setErr(true);
          },
          () => {
          
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateProfile(res.user, {
                  displayName,
                  photoURL: downloadURL,
                });
             
            await setDoc(doc(db,"users",res.user.uid),{
                  uid:res.user.uid,
                  displayName,
                  email,
                  displayConfPassword,
                  displayNID,
                  photoURL:downloadURL,
                  administration,
                  yearsNo,
                  school,
                  specialization,
                  phone,
                  user,
                  graduate,
                });
           });
          }
        );
       
      } catch (err) {
        setErr(true);
      }
 
    }
  

  return ( 
 

    <div  className=" mb-4 container logContainer  col-md-6 col-12 ">
      
    <Form  className=""  onSubmit={handleSubmit}>
      <center>
        <h2 className="logHedear">SIGN UP</h2>
      </center>
      <div className="progs">
        <span>{Page}/3</span>
        <ProgressBar now={Prog} />
      </div>
      {Page == 1 ? <Pg1 userData={userData} setuserData={setuserData} error={error} setError={setError}/> : Page == 2 ? <Pg2 userData={userData} setuserData={setuserData} error={error} setError={setError} /> 
      : Page == 3 ? <Pg3 userData={userData} setuserData={setuserData} error={error} setError={setError} /> : null}
     
        <div className="btnS" disabled = {error.password || error.email || error.phone}>
        <button className="btnlogin" type="submit"  >
          Submit
        </button>
      </div>
      
    </Form>
     {Page < 3 && Page >= 1 && (
      <button className="Twobtn" onClick={() => changePageinc()}>
        Next
      </button>
    )}
    {Page > 1 && (
      <button className="Twobtn" onClick={() => changePagedec()}>
        Back
      </button>
    )}
     {err && <span>somthing wrong</span>}
    </div>

  );
}
export default Sign_Up;
