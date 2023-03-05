import "./pdf.css"
import React from 'react'

export const Pdf = ({setModal, resume}) => {
  return (
    <div className='backshadow '>

        <div className='custom-modal'>

            <div className='delete-icon'
            onClick={()=>setModal(false)}>
              x
            </div>
            <embed type="application/pdf" src={resume} className="w-100" height={100+"%"} >
    </embed>
        </div>

    </div>
  )
}


