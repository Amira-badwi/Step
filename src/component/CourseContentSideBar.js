import React from 'react'

function CourseContentSideBar() {

    return (<>
        <div class="container-fluid fixed-top">
            <div class="row">
                <div class="col-3 bg-light sidebar">
                    <nav class="nav nav-pills flex-column">
                        <a class="nav-link active" href="#">Home</a>
                        <a class="nav-link" href="#">About</a>
                        <a class="nav-link" href="#">Contact</a>
                    </nav>
                </div>
                <div class="col-9 content">
                    <h1>Page Content</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default CourseContentSideBar