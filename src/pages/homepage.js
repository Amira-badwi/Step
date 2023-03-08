import { langContext } from "../component/context/langContext";
import AboutCard from "../component/Homepage/About";
import CarouselFadeExample from "../component/Homepage/carsoul";
import CoursesSwipper from "../component/Homepage/CoursesSwipper";
import Footer from "../component/Homepage/Footer";
import News from "../component/Homepage/News";
import TopCATEGORIES from "../component/Homepage/Topcat";
import { useContext } from 'react';
import ArAboutCard from "../component/arabicHomePage/ArAbout";
import ArCoursesSwipper from "../component/arabicHomePage/ِِِArCoursesSwipper";
import ArTopCATEGORIES from "../component/arabicHomePage/ArTopcat";
import ArNews from "../component/arabicHomePage/ArNews";
import ArFooter from "../component/arabicHomePage/ArFooter";
export default function Home(){
    const {contextlang,setcontextlang} =useContext(langContext);

    return (<>
    <CarouselFadeExample/>
    {contextlang=="En"? <><AboutCard/>   <TopCATEGORIES/>   <CoursesSwipper/> <News/>  <Footer/> </>:<> <ArAboutCard/>
    <ArTopCATEGORIES/>
     <ArCoursesSwipper/> <ArNews/>
     <ArFooter/>
     </>}
    </>)
}