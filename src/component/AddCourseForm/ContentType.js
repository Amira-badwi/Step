import React, { useState } from 'react'

function ContentType(props) {
    
  return (
    <div>
        <select className="form-select m-5 w-75" aria-label="Default select example" id="curriclem-type" name='curriclemType' onChange={props.handleContentType}>
            <option value="">ContentType</option>
            <option value="course">Course</option>
            <option value="book">Book</option>
          </select>
        </div>
  )
}

export default ContentType