import AboutCard from "../component/About";
import CarouselFadeExample from "../component/carsoul";
import CoursesSwipper from "../component/CoursesSwipper";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import News from "../component/News";
import TopCATEGORIES from "../component/Topcat";

export default function Home(){
    return (<>
    <NavBar/>
    <CarouselFadeExample/>
    <AboutCard/>
    <TopCATEGORIES/>
   <CoursesSwipper/>
    <News/>
    <Footer/>
    </>)
}