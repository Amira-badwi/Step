import React from "react";
import {Form } from "react-bootstrap";
function Pg2(){
  const handleSubmit=(e)=>{
  e.preventDefault()
  //console.log(e.target[0].value)
  const administrationName=e.target[0].value;
  const schoolName=e.target[1].value;
  const yearsNo=e.target[2].vslue;
  }
    return(
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 " controlId="formBasicText">
        <Form.Label>Administration Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your administration" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicText">
        <Form.Label>School</Form.Label>
        <Form.Control type="text" placeholder="Enter school name " />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Number of years</Form.Label>
          <Form.Select id="disabledSelect">
            <option>0-1</option>
            <option>2-5</option>
            <option>6-15</option>
          </Form.Select>
        </Form.Group>
        <div className="btnS">
        <button className="btnlogin" type="submit"  >
          Submit
        </button>
      </div>
        </Form>
       
   
    )

}
export default Pg2;