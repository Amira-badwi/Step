import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./SignUp.css";

function Pg1(props) {
 // console.log(props)
  const changeUserData = (e) => {
    if (e.target.name == "userName") {
     props.setuserData({
        ...props.userData,
        userName: e.target.value,
       
      });
      
     props.setError({
        ...props.error,
        userName: e.target.value.length == 0 ? "This Field is Required" : null,
      });
    }
    if (e.target.name == "email") {
     props.setuserData({
        ...props.userData,
        email: e.target.value,
      });
     props.setError({
        ...props.error,
        email:
          e.target.value.length == 0
            ? "This Field is Required"
            : /.+@.+\.[A-Za-z]+$/.test(e.target.value)
            ? null
            : "this email not valid",
      });
    }
    if (e.target.name == "password") {
     props.setuserData({
        ...props.userData,
        password: e.target.value,
      });
     props.setError({
        ...props.error,
        password:
          e.target.value.length == 0
            ? "This Field is Required"
            : e.target.value.length < 8
            ? "must be at least 8 number"
            : null,
      });
    }
    if (e.target.name == "confirmPassword") {
      props.setuserData({
        ...props.userData,
        confirmPassword: e.target.value,
      });
      props.setError({
        ...props.error,
        confirmPassword:
          e.target.value !=props.userData.password
            ? "Not confirm"
            : e.target.value.length < 8
            ? "must be at least 8 number"
            : null,
      });
    }
if(e.target.name=="image")
{
  props.setuserData({
    ...props.userData,
    image:e.target.value,
  })
}
    if (e.target.name == "NID") {
     props.setuserData({
        ...props.userData,
        NID: e.target.value,
      });
      props.setError({
        ...props.error,
        NID:
          e.target.value.length == 0
            ? "This Field is Required"
            : e.target.value.length == 14
            ? null
            : "Not valid must be 14 numbers",
      });
    }
  };
 
    return (
  
      <>
        <Form.Group className="mb-3 must" controlId="formBasicText">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={props.userData.userName}
            name="userName"
            onChange={(e) => changeUserData(e)}
          />
          <p className="text-danger">{props.error.userName}</p>
        </Form.Group>
        <Form.Group className="mb-3 must" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={props.userData.email}
            onChange={(e) => changeUserData(e)}
          />
          <p className="text-danger">{props.error.email}</p>
        </Form.Group>

        <Form.Group className="mb-3 must" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={props.userData.password}
            onChange={(e) => changeUserData(e)}
          />
          <p className="text-danger">{props.error.password}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={props.userData.confirmPassword}
            onChange={(e) => changeUserData(e)}
          />
          <p className="text-danger">{props.error.confirmPassword}</p>
        </Form.Group>
        <Form.Group className="mb-3 must" controlId="formBasicText">
          <Form.Label>National ID</Form.Label>
          <Form.Control
            type="password"
            placeholder="National ID"
            name="NID"
            value={props.userData.NID}
            onChange={(e) => changeUserData(e)}
          />
          <p className="text-danger">{props.error.NID}</p>
        </Form.Group>
        <Form.Group className="mb-3">
          <input type="file" style={{display:"none"}} name="image" id="img" onChange={(e) => changeUserData(e)}/>
          <label htmlFor="img" className="diff">
            <img src={require('../../../images.png')} width="100px" style={{cursor:"pointer"}} name="image" id="img" onChange={(e) => changeUserData(e)}/>
            upload identification card (only 2 image)
          </label>
        </Form.Group>
           {/* {err&<span>somthing wrong</span>} */}
      </>
     
    
    );
  };

export default Pg1;
