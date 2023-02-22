import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./SignUp.css";
function Pg3(props) {
  const changeUserData = (e) => {
   
    if (e.target.name == "specialization") {
      props.setuserData({
        ...props.userData,
        specialization: e.target.value,
      });
      props.setError({
        ...props.error,
        specialization:
          e.target.value.length == 0 ? "This Field is Required" : null,
      });
    }
    if (e.target.name == "phone") {
      props.setuserData({
        ...props.userData,
        phone: e.target.value,
      });
      props.setError({
        ...props.error,
        phone:
          e.target.value.length == 0
            ? "This Field is Required"
            : e.target.value.length < 11
            ? "Not valid"
            : null,
      });
    }
    if (e.target.name== "Graduation") {
      props.setuserData({
        ...props.userData,
         
        Graduation: e.target.value,
        
      });
    }
      if (e.target.name== "user") {
        props.setuserData({
          ...props.userData,
           
           user: e.target.value,
          
        });
       
    }
  };

  return (
    <>
      <Form.Group className="mb-3 must" controlId="formBasicText">
        <Form.Label>Specialization</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your specialization"
          name="specialization"
          onChange={(e) => changeUserData(e)}
        />
        <p className="text-danger">{props.error.specialization}</p>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledSelect">Graduation Year</Form.Label>
        <Form.Select
          id="disabledSelect"
          onChange={(e) => changeUserData(e)}
          name="Graduation"
        >
          <option name="option1">2000</option>
          <option name="option2">2010</option>
          <option name="option3">2015</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 must" controlId="formBasicText">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your Phone number"
          name="phone"
          onChange={(e) => changeUserData(e)}
        />
        <p className="text-danger">{props.error.phone}</p>
      </Form.Group>
      <Form.Group className="mb-3" onChange={(e) => changeUserData(e)}>
        <Form.Label htmlFor="disabledSelect" className="diff">
          Choose
        </Form.Label>
        <br />
        <input type="radio" id="trainer" name="user" value="trainer" />
        <label htmlFor="trainer">Trainer</label>
        <br />
        <input type="radio" id="trainee" name="user" value="trainee" />
        <label htmlFor="trainee">Trainee</label>
        <br />
      </Form.Group>
    </>
  );
}
export default Pg3;
