import React from 'react'

function CourseInfo(props) {
    const handleInputChange=(e)=>{
        if(e.target.name=='courseName'){
            props.setCourseData({...props.courseData,courseName:e.target.value})
            console.log(props.courseData);
        }else if(e.target.name=='courseDescription'){
            props.setCourseData({...props.courseData,courseDescription:e.target.value})
        }else if(e.target.name=='courseImage'){
            props.setCourseData({...props.courseData,courseImage:e.target.value})
        }else{
            props.setCourseData({...props.courseData,courseCategory:e.target.value})
        }
    }
  return (
    <div> 
        <div className="mb-3">
            <label htmlFor="course-name" className="form-label">Course Name:</label>
            <input placeholder='Course Name' type="text" className="form-control" name='courseName' value={props.courseData.courseName} id="course-name" aria-describedby="courseNameHelp" onChange={handleInputChange}/>
            {/* <div id="courseNameHelp" class="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
            <label htmlFor='course-category' className='form-label' name='courseCategory'>Course Category:</label>
            <select className="form-select" aria-label="Default select example" id="course-category" onChange={handleInputChange}>
                <option selected>Course Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select></div>
        <div className="mb-3">
            <label htmlFor="course-img" className="form-label" name='courseImage'>Course Image:</label>
            <input type="file" accept="image/*" placeholder='CourseImage' className="form-control" id="course-img" name='courseImage' onChange={handleInputChange}></input>
        </div>
        <div className="mb-3">
            <label htmlFor="course-description" className="form-label">Course Description:</label>
            <textarea placeholder='Course Description' name='courseDescription' className="form-control" id="course-description" value={props.courseData.courseDescription} onChange={handleInputChange}></textarea>
        </div>
</div>
  )
}

export default CourseInfo