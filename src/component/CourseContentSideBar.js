import React, { useState } from 'react'
import './CourseContentSideBar.css'
function CourseContentSideBar() {
    const [ isShow, setIsShow ] = useState(true)
    console.log(isShow);
    const classN = `offcanvas offcanvas-start ${isShow?'show':''}`
    return (<>
        <button class="sideBarToggle" type="button" onClick={()=>setIsShow(true)} data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-arrow-right"></i></button>

        <div class={classN} offcanvas-start data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                <button type="button" class="btn-close" onClick={()=>setIsShow(false)} aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p>Try scrolling the rest of the page to see this option in action.</p>
            </div>
        </div>
    </>
    )
}

export default CourseContentSideBar