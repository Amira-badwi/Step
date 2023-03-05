import React from 'react'

export const Buttondelete = ({setModal}) => {
  return (
    <button className='btnStyle w-100 ' 
    onClick={()=>setModal(true)}>open</button>
  )
}