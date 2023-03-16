import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import '../../component/Homepage/About.css'
import {db} from "../../firebase";
import { collection, doc, getDocs ,addDoc, setDoc, updateDoc } from "firebase/firestore";

export default function Form({addReview ,ele}) {

    const [name,setName] =useState('');
    const [message,setMessage] =useState('');
    const [rating, setRating] = useState(0) ;


  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: 1,
      name,
      message,
      rating: rating 
    }
    addReview(review);
    // addtofirebase();
updateUser(ele.id,ele.courseReviews);
    setMessage("")
    setName("")
   
  }
  const isDisabled = () => {
    if (!name || !message || !rating){
      return true;
    }
  }
  // const coursesCollectionRef=collection(db,"review");

  // const addtofirebase=async ()=>{
  //  await addDoc(coursesCollectionRef ,{username:name ,message:message , rate: rating})  
  // }
  
  const updateUser= async(id,courseReview)=>
  {
  const reviewDoc= doc(db,"courses",id);
  const newfield={courseReviews:[...courseReview,{name:name ,message:message ,rating:rating}]};
  await updateDoc(reviewDoc ,newfield);
  }
    return (
        <form className='mt-2' onSubmit= {(e) => formSubmit(e)}>
            <div className='mb-3'>
  <label htmlFor='name' className='form-label'>Your Name </label>
  <input 
  type='text' 
  name='name'
  value={name}
  onChange={(e) => setName(e.target.value)}
  className='form-control'
  placeholder='Name' />
</div>
<div className='mb-3'>
  <label htmlFor='message' className='form-label'>Your Feedback</label>
  <textarea 
   className='form-control'
   name='message' 
   value={message}
   onChange={(e) => setMessage(e.target.value)}
   placeholder='Feedback'
   rows='3'></textarea>
</div>

<div className='mb-3'>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
      />
    </div>


<div className='mb-3'>
    <button 
     className='btn bgcolor rounded-pill w-5'
    disabled = {isDisabled()}
    type='submit' 
   >
        Submit
    </button>
  </div>
        </form>

    )
}