import React, { useState } from 'react'

function ContentType(props) {

  return (
    <div className='m-5 w-75'>
      <select className="form-select mb-3" aria-label="Default select example" id="curriclem-type" name='curriclemType' onChange={props.handleContentType}>
        <option value="">ContentType</option>
        <option value="course">Course</option>
        <option value="book">Book</option>
      </select>
      {props.contentTypeErr ? <div className='text-danger'>{props.contentTypeErr}</div> : null}

    </div>
  )
}

export default ContentType