import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";
function Login() {
  
 const [login,setLogin]=useState({
  email:'',
  password:''
 })
 const handelChange=(e)=>{
if (e.target.name=='email'){
  setLogin({...login,email:e.target.value})
}else{
  setLogin({...login,password:e.target.value})
}
 }
 const handleSubmit=async (e)=>{
  e.preventDefault()
  try {
    const user = await signInWithEmailAndPassword(auth,login.email,login.password);
console.log(user.user);
 }catch(err){console.log(err.message);}}
  return (
    <div className="contentlog ">
      <div className="d-none d-lg-block">
        <img src={require('../../../src/login.png')} width="400px"/>
      </div>
      <div className="contain col-md-7 col-10 col-lg-6">
      <center>
        <h2 className="logHedear">LOGIN</h2>
      </center>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handelChange} />
           
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handelChange} />
        </Form.Group>
        <div className="btnS">
          <button className="btnlogin" type="submit">
            Login
          </button>
        </div>
      </Form>
    </div>
    </div>
  );
}
export default Login;
