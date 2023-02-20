import React, { useState } from 'react'
import CurriclemSection from './CurriclemSection'

function CourseContent(props) {
  const [isAdd,setIsAdd]=useState(false)
  const [singleSection,setSingleSection]=useState({sectionName:'',sectionContent:[]})
  const handleSectionNameChange=(e)=>{
    setSingleSection({...singleSection,sectionName:e.target.value})
  }
  const addSection = () => {
    console.log(props.courseData.courseSections);
    console.log(singleSection);
    props.setCourseData({...props.courseData,courseSections:[...props.courseData.courseSections,singleSection]})
    setSingleSection({sectionName:'',sectionContent:[]})
    setIsAdd(false)

  }
  return (
    <div>
      {props.courseData.courseSections.map((section,index) => <CurriclemSection key={index} sectionNumber={index+1} section={section} courseData={props.courseData} setCourseData={props.setCourseData}/>)}
      {isAdd?<div className="mb-3">
            <label htmlFor="section-name" className="form-label">Section Name:</label>
            <div className='d-flex'>
            <input placeholder='Section Name' id='section-name' value={singleSection.sectionName} type="text" className="form-control" name='sectionName' onChange={handleSectionNameChange}/>
            <button className='btn btn-secondary ms-3' onClick={addSection}><i className="fa-solid fa-plus"></i></button>
        </div></div>:null}
      <button className='btn btn-secondary m-4' onClick={()=>setIsAdd(true)}><i className="fa-solid fa-plus"></i> Add Section</button>
    </div>
  )
}

export default CourseContent