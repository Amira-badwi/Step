import React, { useState } from 'react'
import CurriclemSection from './CurriclemSection'
import { v4 } from 'uuid'

function CourseContent(props) {
  const [isAdd, setIsAdd] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [singleSection, setSingleSection] = useState({ sectionId: 0, sectionName: '', sectionContent: [] })
  const handleSectionNameChange = (e) => {
    setSingleSection({ ...singleSection, sectionName: e.target.value })
  }
  const addSection = () => {
    props.setCourseData({ ...props.courseData, courseSections: [...props.courseData.courseSections, { ...singleSection, sectionId: singleSection.sectionName.replace(/\s/g, "") + v4() }] })
    setSingleSection({ sectionId: '', sectionName: '', sectionContent: [] })
    setIsAdd(false)
  }
  const handleSectionDelete = (num) => {
    // setTodos(todos.filter((value) => value.taskId != id))
    props.setCourseData({
      ...props.courseData, courseSections: props.courseData.courseSections.filter((value, index) => index != (num - 1))
    })
  }
  const [editedSection, setEditedSection] = useState(0);
  const handleSectionEdit = (num) => {
    setIsEdit(true)
    setEditedSection(num)
  }
  const Edit = (name) => {
    const newSections = [...props.courseData.courseSections]
    newSections[editedSection - 1] = { ...singleSection, sectionName: name }
    props.setCourseData({ ...props.courseData, courseSections: newSections })
    setIsEdit(false)
  }
  return (
    <div>

      {props.courseData.courseSections.map((section, index) => <CurriclemSection Edit={Edit} handleSectionEdit={handleSectionEdit} handleSectionDelete={handleSectionDelete} key={index} sectionNumber={index + 1} section={section} courseData={props.courseData} setCourseData={props.setCourseData} />)}
      {isAdd ? <div className="mb-3">
        <label htmlFor="section-name" className="form-label">Section Name:</label>
        <div className='d-flex'>
          <input placeholder='Section Name' id='section-name' value={singleSection.sectionName} type="text" className="form-control" name='sectionName' onChange={handleSectionNameChange} />
          <button className='btn btn-secondary ms-3' onClick={addSection}><i className="fa-solid fa-plus"></i></button>

        </div></div> : null}
      <button className='btn btn-secondary m-4' onClick={() => setIsAdd(true)}><i className="fa-solid fa-plus"></i> Add Section</button>
    </div>
  )
}

export default CourseContent