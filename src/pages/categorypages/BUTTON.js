import { stringify } from '@firebase/util';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../component/context/AuthContext';
import { db } from '../../firebase';

export const Buttondelete = ({setModal ,id ,saved}) => {
  const currentUse=useContext(AuthContext)
  const currentValue=currentUse.currentUser;
  const currentData=currentUse.userData;
  const  [flag,setflag] =useState(false);

const deletebook =async(idd,booksUser)=>
{   
const array=  booksUser.splice((booksUser.indexOf(id)),1)
const reviewDoc= doc(db,"users",idd);
const newfield={booksUser:array};
await updateDoc(reviewDoc ,newfield);
setflag(false)
}

  const updateUser= async(idd,booksUser)=>
  {
  const reviewDoc= doc(db,"users",idd);
  const newfield={booksUser:[...booksUser,id]};
  await updateDoc(reviewDoc ,newfield);
setflag(true)
  }

  return (
   <>
    <button className='btnStyle w-25 ' 
    onClick={()=>setModal(true)}>open</button>
   {
    saved=="true" ||flag==true ? <button className='btnStyle w-50 ' 
    onClick={()=>deletebook(currentValue.uid,currentData.booksUser)}>delete</button>
: <button className='btnStyle w-50 ' 
onClick={()=>updateUser(currentValue.uid,currentData.booksUser)}>save</button>

   }
   </>
  )
}