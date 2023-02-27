import { useEffect, useState } from "react";
import { collection,doc  } from "firebase/firestore";
import {db} from "../../firebase";
export function useFirestore () {
    const [items,setItems]=useState([]);

useEffect(()=>{
let unsubscribe=  db.collection("courses").onSnapshot(snap=>{
    let fetched=snap.docs.map(doc=>{
      return{...doc.data(),id:doc.id}
    })
    setItems(fetched)
  })
  return unsubscribe;
},[])
return{items}
}

