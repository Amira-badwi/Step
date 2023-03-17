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
          e.target.value.length == 0 ? "This Field is Required" : /^[A-Za-z\s]*$/.test(e.target.value)?null:"must input letters",
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
            : !/^01[0-2,5]{1}[0-9]{8}$/.test(e.target.value)
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
        //console.log(e.target)
        function test(){
        if(e.target.value=="trainer")
        {
          return  e.target.value
        }
        else if(e.target.value=="trainee")
        {
          return e.target.value
        }
        else
        return null
      }
      props.setError({
        ...props.error,
        user:
          test() == null
            ? "This Field is Required":null
      })
    }
  };

  return (
    <>
      <Form.Group className="mb-3 must" controlId="formBasicText">
        <Form.Label>Specialization</Form.Label>
        <Form.Control
        value={props.userData.specialization}
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
        value={props.userData.Graduation}
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
        value={props.userData.phone}
          type="text"
          placeholder="Enter your Phone number"
          name="phone"
          onChange={(e) => changeUserData(e)}
        />
        <p className="text-danger">{props.error.phone}</p>
      </Form.Group>
      <Form.Group className="mb-3" onChange={(e) => changeUserData(e)}  >
        <Form.Label htmlFor="disabledSelect" className="diff">
          Choose
        </Form.Label>
        <br />
        <input type="radio" id="trainer" name="user"  value="trainer" />
        <label htmlFor="trainer">Trainer</label>
        <br />
        <input type="radio" id="trainee" name="user" value="trainee" />
        <label htmlFor="trainee">Trainee</label>
        <br />
        <p className="text-danger">{props.error.user}</p>

      </Form.Group>
    </>
  );
}
export default Pg3;
