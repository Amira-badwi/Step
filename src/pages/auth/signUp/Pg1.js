import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./SignUp.css";
import { auth, db, storage } from "../../../firebase";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
function Pg1() {
  const [userData, setuserData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
    NID: null,
  });
  const [error, setError] = useState({
    userName: null,
    email: null,
    password: null,
    confirmPassword: null,
    image: null,
    NID: null,
  });
  const changeUserData = (e) => {
    if (e.target.name == "userName") {
      setuserData({
        ...userData,
        userName: e.target.value,
      });
      setError({
        ...error,
        userName: e.target.value.length == 0 ? "This Field is Required" : null,
      });
    }
    if (e.target.name == "email") {
      setuserData({
        ...userData,
        email: e.target.value,
      });
      setError({
        ...error,
        email:
          e.target.value.length == 0
            ? "This Field is Required"
            : /.+@.+\.[A-Za-z]+$/.test(e.target.value)
            ? null
            : "this email not valid",
      });
    }
    if (e.target.name == "password") {
      setuserData({
        ...userData,
        password: e.target.value,
      });
      setError({
        ...error,
        password:
          e.target.value.length == 0
            ? "This Field is Required"
            : e.target.value.length < 8
            ? "must be at least 8 number"
            : null,
      });
    }
    if (e.target.name == "confirmPassword") {
      setuserData({
        ...userData,
        confirmPassword: e.target.value,
      });
      setError({
        ...error,
        confirmPassword:
          e.target.value != userData.password
            ? "Not confirm"
            : e.target.value.length < 8
            ? "must be at least 8 number"
            : null,
      });
    }

    if (e.target.name == "NID") {
      setuserData({
        ...userData,
        NID: e.target.value,
      });
      setError({
        ...error,
        NID:
          e.target.value.length == 0
            ? "This Field is Required"
            : e.target.value.length == 14
            ? null
            : "Not valid must be 14 numbers",
      });
    }
  };
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(e.target[0])
  console.log(userData)
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const displayConfPassword = e.target[3].value;
      const displayNID = e.target[4].value;
      const file = e.target[5].files[0];

      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        const storageRef = ref(
          storage,
          displayName,
          
        );
  console.log(res.user)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          (error) => {
            setErr(true);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
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
                })
              }
            );
          }
        );
       
      } catch (err) {
        setErr(true);
      }
 
    }
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 must" controlId="formBasicText">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={userData.userName}
            name="userName"
            onChange={(e) => changeUserData(e)}
          />
          <p className="text-danger">{error.userName}</p>
        </Form.Group>
        <Form.Group className="mb-3 must" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={userData.email}
            onChange={(e) => changeUserData(e)}
          />
          <p className="text-danger">{error.email}</p>
        </Form.Group>

        <Form.Group className="mb-3 must" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={(e) => changeUserData(e)}
          />
          <p className="text-danger">{error.password}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={(e) => changeUserData(e)}
          />
          <p className="text-danger">{error.confirmPassword}</p>
        </Form.Group>
        <Form.Group className="mb-3 must" controlId="formBasicText">
          <Form.Label>National ID</Form.Label>
          <Form.Control
            type="password"
            placeholder="National ID"
            name="NID"
            value={userData.NID}
            onChange={(e) => changeUserData(e)}
          />
          <p className="text-danger">{error.NID}</p>
        </Form.Group>
        <Form.Group className="mb-3">
          <input type="file" />
          <Form.Label htmlFor="disabledSelect" className="diff">
            upload identification card (only 2 image)
          </Form.Label>
        </Form.Group>
        <div className="btnS">
        <button className="btnlogin" type="submit"  >
          Submit
        </button>
      </div>
        {/* {err&<span>somthing wrong</span>} */}
      </Form>
    );
  };

export default Pg1;
