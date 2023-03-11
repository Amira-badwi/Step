import React from "react";
import {Form } from "react-bootstrap";
function Pg2(props){
const changeUserData=(e)=>{
  console.log(e)
  if(e.target.name=="administration")
  {
    props.setuserData({
      ...props.userData,
      administration:e.target.value,
    })
  }
  if(e.target.name=="school")
  {
    props.setuserData({
      ...props.userData,
      school:e.target.value,
    })
  }
  if(e.target.name=="yearsNo")
  {
    props.setuserData({
      ...props.userData,
      yearsNo:e.target.value,
    })
   
  }
  
}
    return(
      <>
      <Form.Group className="mb-3 must" controlId="formBasicText">
        <Form.Label>Administration Name</Form.Label>
        <Form.Control type="text" name="administration" value={props.userData.administration}  onChange={(e) => changeUserData(e)}   placeholder="Enter your administration" />
         
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicText">
        <Form.Label>School</Form.Label>
        <Form.Control type="text" name="school" onChange={(e) => changeUserData(e)}  value={props.userData.school} placeholder="Enter school name " />
        
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Number of years</Form.Label>
          <Form.Select id="disabledSelect" name="yearsNo"  value={props.userData.yearsNo} onChange={(e) => changeUserData(e)}>
            <option >0-1</option>
            <option >2-5</option>
            <option  >6-15</option>
          </Form.Select>
        </Form.Group>
      </>
       
   
    )

}
export default Pg2;