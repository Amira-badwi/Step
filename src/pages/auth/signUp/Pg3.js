import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./SignUp.css"
function Pg3() {
  const[data,setData]=useState({
    Spec:"",
    phone:null
  })
  const[err,setErr]=useState({
    spec:null,
    phone:null
  })
  const changeUserData=(e)=>{
   if(e.target.name=="specialization")
   {
    setData({
...data,
Spec:e.target.value
    })
    setErr({
      ...err,
      spec:e.target.value.length==0?"This Field is Required":null
    })
   }
   if(e.target.name=="phone")
   {
     setData({
       ...data,
       phone:e.target.value
     })
     setErr({
       ...err,
       phone: e.target.value.length==0? "This Field is Required" :e.target.value.length < 11 ? "Not valid":null
   
   
      })
      
   }
  }
  const handleSubmit=(e)=>{
e.preventDefault()
const specializationN=e.target[0].value;
const graduationY=e.target[1].value;
const displayType=e.target[2].value;
const displayPhone=e.target[3].value;
  }
  return (
    <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3 must" controlId="formBasicText">
        <Form.Label>Specialization</Form.Label>
        <Form.Control type="text" placeholder="Enter your specialization" name="specialization"  onChange={(e) => changeUserData(e)}/>
        <p className="text-danger">{err.spec}</p>
       </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledSelect">Graduation Year</Form.Label>
        <Form.Select id="disabledSelect">
          <option>2000</option>
          <option>2010</option>
          <option>2015</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 must" controlId="formBasicText">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter your Phone number" name="phone" value={data.phone} onChange={(e) => changeUserData(e)} />
        <p className="text-danger">{err.phone}</p>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledSelect" className="diff">Choose</Form.Label>
      <br/>
        <input type="radio" id="trainer" name="trainer" value="trainer" /> 
        <label htmlFor="trainer">Trainer</label>
        <br /> 
        <input type="radio" id="trainee" name="trainer" value="trainee" />
        <label htmlFor="trainee">Trainee</label>
        <br /> 
      </Form.Group>
     
      <div className="btnS">
        <button className="btnlogin" type="submit"  >
          Submit
        </button>
      </div>
    </Form>
  );
}
export default Pg3;
