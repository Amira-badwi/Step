import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import CourseSection from '../pages/CourseContent/CourseSection';
import './CourseContentSideBar.css'
function CourseContentSideBar() {
    const [course, setCourse] = useState({
        courseName: '',
        courseDescription: '',
        courseCategory: '',
        courseImage: '',
        courseSections: []
      })
    const { courseName, id } = useParams()
    const docRef = doc(db, "courses", courseName);
  useEffect(() => {
    // const 
    const getCourse = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setCourse(docSnap.data())
        console.log(course);
      } else {
        console.log("No such document!");
      }
    }
    getCourse()

  }, [])
    const [isShow, setIsShow] = useState(true)
    console.log(isShow);
    const classN = `offcanvas offcanvas-start ${isShow ? 'show' : ''}`
    return (<>
        <button class="sideBarToggle" type="button" onClick={() => setIsShow(true)} data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-arrow-right"></i></button>

        <div class={`${classN} offcanvasCourse`} offcanvas-start data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                <button type="button" class="btn-close" onClick={() => setIsShow(false)} aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            {course.courseSections.map((section, index) => <CourseSection index={index} section={section} courseId={id} isOffCanvas={true}/>)}
            </div>
        </div>
    </>
    )
}

export default CourseContentSideBar