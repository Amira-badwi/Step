import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { auth } from "../../firebase";
function Login() {
  
 const [login,setLogin]=useState({
  email:'',
  password:''
 })
 const handelChange=()=>{

 }
 const [err, setErr] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

      const email = e.target[0].value;
      const password = e.target[1].value;
       
      try {
         await signInWithEmailAndPassword(auth, email, password)
       
      } catch (err) {
        setErr(true);
      }
 
    }
  return (
    <div className="contentlog">
      <div className="imgs">
        <img src={require('../../../src/login.png')} width="400px"/>
      </div>
      <div className="contain">
      <center>
        <h2 className="logHedear">LOGIN</h2>
      </center>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={()=>handelChange()} />
           
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" />
        </Form.Group>
        <div className="btnS">
          <button className="btnlogin" type="submit">
            Login
          </button>
        </div>
        {/* <p>Not a user<Link to={"/register"}>Sign Up</Link></p> */}
      </Form>
      {err && <span>somthing error</span>}
    </div>
    </div>
  );
}
export default Login;
