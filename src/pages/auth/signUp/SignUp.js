import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form } from "react-bootstrap";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";
//import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import Pg1 from "./Pg1";
import "./SignUp.css";
import Pg2 from "./Pg2";
import Pg3 from "./Pg3";
import { Link } from "react-router-dom";
import NavBar from "../../../component/Homepage/NavBar";

function Sign_Up() {
  
  ///////////////handleNaxt////////////////////
  const handleNext = () => {};
  const [err, setErr] = useState();
  const [Page, setPage] = useState(1);
 
  /////////////proress/////////////////
  const [Prog, setProg] = useState(40);
  const changePageinc = () => {
    if (Page == 1) {
      if (
        error.email == null &&
        error.userName == null &&
        error.password == null &&
        error.confirmPassword == null &&
        error.NID == null &&
        userData.email !=""
      ) {
        setPage(2);
        const prog = Prog + 30;
        setProg(prog);
        setErr(false);
      } else {
        setErr(true);
      }
    }
    if (Page == 2) {
      if (error.administration == null&&userData.administration!="") {
        setPage(3);
        const prog = Prog + 30;
        setProg(prog);
        setErr(false);
      } else {
        setErr(true);
      }
    }
     
    if (Page == 3){if (error.specialization == null  &&  userData.phone != "") {
      setErr(false)
      } else {
        setErr(true);
      }
    }
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
    image: null,
    NID: 0,
    administration: "",
    school: "",
    yearsNo: null,
    Graduation: 0,
    specialization: "",
    phone: "",
    user: "",
  });
  const [error, setError] = useState({
    userName: null,
    email: null,
    password: null,
    confirmPassword: null,
    image: null,
    NID: null,
    specialization: null,
    phone: null,
  });
  //////////////////handleSubmit////////////////
  
  // const [err2, setErr2] = useState();
  const [err2, setErr2] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(e.target[0])
    console.log(userData);
  
    const displayName = userData.userName;
    const email = userData.email;
    const password = userData.password;
    const displayConfPassword = userData.confirmPassword;
    const displayNID = userData.NID;
    const file = userData.image;
    const administration = userData.administration;
    const yearsNo = userData.yearsNo;
    const school = userData.school;
    const specialization = userData.specialization;
    const phone = userData.phone;
    const user = userData.user;
    const graduate = userData.Graduation;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
     
      const storageRef = ref(storage, 'imagesCard/'+displayName);
 
     
      const uploadTask = uploadBytesResumable(storageRef, file );
    //  console.log(file);
      uploadTask.then( 
        
        // (error) => {
        //   setErr2(true)
          
        // }, 
        () => {
         getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
              
           });
             await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              displayConfPassword,
              displayNID,
              photoURL: downloadURL,
              administration,
              yearsNo,
              school,
              specialization,
              phone,
              user,
              graduate,
            });
            // await setDoc(doc(db,"userBooks",res.user.uid),{

            // });
             
          });
        }
        
     );
    } 
    
      catch (err) {
       setErr2(true)
        
    }
  }
 
  return (
    <div className=" mb-4 container logContainer  col-md-6 col-12 ">
      <Form className="" onSubmit={handleSubmit}>
        <center>
          <h2 className="logHedear">SIGN UP</h2>
        </center>
        <div className="progs">
          <span>{Page}/3</span>
          <ProgressBar now={Prog} />
        </div>
        {Page == 1 ? (
          <Pg1
            userData={userData}
            setuserData={setuserData}
            error={error}
            setError={setError}
          />
        ) : Page == 2 ? (
          <Pg2
            userData={userData}
            setuserData={setuserData}
            error={error}
            setError={setError}
          />
        ) : Page == 3 ? (
          <Pg3
            userData={userData}
            setuserData={setuserData}
            error={error}
            setError={setError}
          />
        ) : null}
        {Page == 3 && (
          <div className="btnS" >
           <button className="btnlogin" type="submit" >  
             Submit
            </button> 
          </div>
        )}
    
        {err && <span className="text-danger">must fill all faild</span>}
      </Form>

      {Page < 3 && Page >= 1 && (
        <button
          className="Twobtn"
          onClick={() => changePageinc()}
          onChange={handleNext}
        >
          Next
        </button>
      )}
      {Page > 1 && (
        <button className="Twobtn" onClick={() => changePagedec()}>
          Back
        </button>
      )}
      {err2 &&<span className="text-danger">find wrong</span>}
      
      <p>Do you have account ? <Link to={"/login"}>Login</Link></p>
    
    </div>
  );
}
export default Sign_Up;
