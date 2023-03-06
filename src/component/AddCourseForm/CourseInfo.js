import React, { useRef, useState } from 'react'

function CourseInfo(props) {
    const imageInputRef=useRef(null)
    const handleInputChange = (e) => {
        if (e.target.name == 'courseName') {
            props.setCourseData({ ...props.courseData, courseName: e.target.value })
            props.setCourseErrs({
                ...props.courseErrs,
                courseName: e.target.value.length == 0 ? "This Field is Required" : (e.target.value.length < 3 ? "Min Length is 3 Characters" : '')
            })
        } else if (e.target.name == 'courseDescription') {
            props.setCourseData({ ...props.courseData, courseDescription: e.target.value })
            props.setCourseErrs({
                ...props.courseErrs,
                courseDescription: e.target.value.length == 0 ? "This Field is Required" : (e.target.value.length < 30 ? "Min Length is 30 Characters" : '')
            })
        } else if (e.target.name == 'courseImage') {
            
            // console.log(imageName);
            props.setCourseData({ ...props.courseData, courseImage: e.target.files[0] })
            props.setCourseErrs({
                ...props.courseErrs,
                courseImage: ''
            })
        } else {
            props.setCourseData({ ...props.courseData, courseCategory: e.target.value })
            props.setCourseErrs({
                ...props.courseErrs,
                courseCategory: e.target.value == '' ? "This Field is Required" :  ''
            })
        }
    }
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="course-name" className="form-label">Course Name:</label>
                <input placeholder='Course Name' type="text" className="form-control" name='courseName' value={props.courseData.courseName} id="course-name" aria-describedby="courseNameHelp" onChange={handleInputChange} />
                {props.courseErrs.courseName ? <div className='text-danger'>{props.courseErrs.courseName}</div> : null}
            </div>
            <div className="mb-3">
                <label htmlFor='course-category' className='form-label' name='courseCategory'>Course Category:</label>
                <select value={props.courseData.courseCategory} className="form-select" aria-label="Default select example" id="course-category" onChange={handleInputChange}>
                    <option value="">Select Category</option>
                    <option value="Dealing_with_children_with_special_needs">Dealing with children with special needs</option>
                    <option value="Teaching_strategies">Teaching strategies</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Mental_Skills">Mental Skills</option>
                    <option value="Human_Development">Human Development</option>
                    <option value="Science">Science</option>
                    <option value="Educational_games">Educational games</option>
                    <option value="Digital_transformation">Digital transformation</option>
                    <option value="Discipline_methods">Discipline methods</option>
                </select>
                {props.courseErrs.courseCategory ? <div className='text-danger'>{props.courseErrs.courseCategory}</div> : null}
            </div>

            <div className="mb-3">
                <label htmlFor="course-img" className="form-label" name='courseImage'>Course Image:</label>
                <input ref={imageInputRef} type="file" accept="image/*" placeholder='CourseImage' className="form-control d-none" id="course-img" name='courseImage' onChange={handleInputChange}></input>
                <div className='d-flex'>
                <button onClick={()=>imageInputRef.current.click()}  className='btn btn-secondary'>Choose File</button>
                <label className='mt-auto ms-2 d-block'>{props.courseData.courseImage.name?props.courseData.courseImage.name: ' No file is selected'}</label>
                </div>
                {props.courseErrs.courseImage ? <div className='text-danger'>{props.courseErrs.courseImage}</div> : null}

            </div>
            <div className="mb-3">
                <label htmlFor="course-description" className="form-label">Course Description:</label>
                <textarea placeholder='Course Description' name='courseDescription' className="form-control" id="course-description" value={props.courseData.courseDescription} onChange={handleInputChange}></textarea>
                {props.courseErrs.courseDescription ? <div className='text-danger'>{props.courseErrs.courseDescription}</div> : null}

            </div>
        </div>
    )
}

export default CourseInfo