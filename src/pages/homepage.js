import AboutCard from "../component/Homepage/About";
import CarouselFadeExample from "../component/Homepage/carsoul";
import CoursesSwipper from "../component/Homepage/CoursesSwipper";
import Footer from "../component/Homepage/Footer";
import News from "../component/Homepage/News";
import TopCATEGORIES from "../component/Homepage/Topcat";

export default function Home(){
    return (<>
    <CarouselFadeExample/>
    <AboutCard/>
    <TopCATEGORIES/>
   <CoursesSwipper/>
    <News/>
    <Footer/>
    </>)
}