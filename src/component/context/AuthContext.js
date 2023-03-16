import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc,collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";


export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
     
    let result;
   
 
     const [userData,setUserData]=useState({user:'user',specialization:''})

    const [currentUser,setCurrenUser]=useState({})
    useEffect(()=>{
      const unsub= onAuthStateChanged(auth,(user)=>{
            setCurrenUser(user)
           console.log(user);
            //console.log(user.email);
            //console.log(user.uid)
            
       
        ;(async()=>{
            const colRef=collection(db,'users')
            const snapshots = await getDocs(colRef)
            const docs =snapshots.docs.map((doc)=>{
            const data=doc.data()
            return data
            })
         
      
          console.log(docs)
         {user==null ? setUserData({user:"user"}):
           result=docs.filter((item)=>item.uid==user.uid)
          setUserData(result[0])
        }
          })()
        });
        return()=>{
            unsub();
    
        }
    },[]);
    //console.log(userData)
    return(
    <AuthContext.Provider value={{currentUser,userData}}>
        {children}

    </AuthContext.Provider>
    )
   
}