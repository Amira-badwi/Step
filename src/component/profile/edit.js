import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useState } from "react";
import { storage } from "../../firebase";
import { AuthContext } from "../context/AuthContext";

import "./edit.css"
// function EditProfile() {
// const currentUse = useContext(AuthContext);
// const currentValue = currentUse.currentUser;
  
//     currentValue.photoURL=update.image
//     console.log(currentValue.photoURL)
//     const handleUpdate=()=>{
       

//       const imageRef=ref(storage,'imagesCard/'+currentValue.displayName)
//      const snapshot=  uploadBytes(imageRef,update.image);
//      const photoURL=getDownloadURL(imageRef)
//      updateProfile(currentValue,{photoURL})

      
      
    
//     }
//     return ( <>

//     </> );
// }

//export default EditProfile;