import React from 'react'

function CourseSection(props) {
    return (
        <div>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {props.section.sectionName}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.section.sectionContent.map((content, index) => (<tr key={index}>
                                        <td>({content.curriclemType}){content.curriclemName}</td>
                                    </tr>))}
                                </tbody>
                            </table></div></div>
                </div>
            </div>
        </div>
    )
}

export default CourseSection