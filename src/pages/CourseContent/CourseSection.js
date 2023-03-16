import React from 'react'
import { Link } from 'react-router-dom'

function CourseSection(props) {
    return (
        <div>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.index}`} aria-expanded="true" aria-controls={`collapse${props.index}`}>
                            {props.section.sectionName}
                        </button>
                    </h2>
                    <div id={`collapse${props.index}`} class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <table class="table table-borderless">
                                <tbody>
                                    {props.section.sectionContent.map((content, index) => (<tr key={index}>
                                        
                                        {props.isOffCanvas?<span className='sectionName' onClick={()=>props.showCourse(content.curriclemId,props.section.sectionId)}><td>({content.curriclemType}) {content.curriclemName}</td></span>
                                        :<Link to={`/courseContent/${props.courseId}/${props.section.sectionId}/${content.curriclemId}`} ><td>({content.curriclemType}) {content.curriclemName}</td></Link>}
                                    </tr>))}
                                </tbody>
                            </table></div></div>
                </div>
            </div>
        </div>
    )
}

export default CourseSection