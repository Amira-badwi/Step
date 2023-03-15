import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import Quiz from './Quiz'
import CourseSection from '../pages/CourseContent/CourseSection';
import './CourseContentSideBar.css'
function CourseContentSideBar() {
  const [content,setContent]= useState({})
  const [isLecture,setIsLecture]=useState(true)
  const [videoId,setVideoId]=useState(0)
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
    const showCourse=(contentId,sectionId,)=>{
      const curriclem=course.courseSections.filter((el)=>el.sectionId==sectionId)[0].sectionContent.filter((el)=>el.curriclemId==contentId)[0]
      setContent(curriclem);
      if(curriclem.curriclemType=='Lecture'){
        setIsLecture(true)
        setVideoId(curriclem.curriclemContent.split('=')[1]);
      }
      else{
        setIsLecture(false)
      }
    }
    return (<div className='row g-0'>
        <button class="sideBarToggle col-1 text-end" type="button" onClick={() => setIsShow(true)} data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Content <i class="fa-solid fa-arrow-right"></i></button>

        <div class={`${classN} offcanvasCourse`} offcanvas-start data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                <button type="button" class="btn-close" onClick={() => setIsShow(false)} aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            {course.courseSections.map((section, index) => <CourseSection index={index} section={section} isOffCanvas={true} showCourse={showCourse}/>)}
            </div>
        </div>
{        isLecture?<iframe className='lecture-frame col-9' height='500' src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>:
<Quiz/>
}
    </div>
    )
}

export default CourseContentSideBar