import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import "./edit.css"
function EditProfile() {
const currentUse = useContext(AuthContext);
const currentValue = currentUse.currentUser;
    const [update,setUpdate]=useState({
        userName:"",
        image:"",
    })
    const handleChange=(e)=>{
     if(e.target.name=="userName")
     {
        setUpdate({
            ...update,
            userName:e.target.value
        })
        
     }
     if(e.target.name=="image")
     {
        setUpdate({
            ...update,
            image:e.target.files[0],
        })
     }
    }
    const handleUpdate=()=>{
     currentValue.displayName=update.userName
     currentValue.photoURL=update.image
    }
    return ( <>
<form className="editProfile" >
  <input type="text" className="m-2" placeholder="user name" name="userName" onChange={(e)=>handleChange(e)}/>
    
    <div>
          <input type="file" style={{display:"none"}} accept="image/*" name="image" id="img" onChange={(e)=>handleChange(e)} />
         <label htmlFor="img" className="diff">
            <img src={require('../../assets/addImgProfile.png')} width="50px" style={{cursor:"pointer"}} name="image" id="img" onChange={(e)=>handleChange(e)}/>
           upload personal image
          </label>
          {/* <p className="text-danger">{props.error.image}</p> */}
          </div>
        <div className="text-center">
        <button className="btn btn-primary" type="submit" onClick={handleUpdate}>OK</button>
        </div>
    
</form>
    </> );
}

export default EditProfile;