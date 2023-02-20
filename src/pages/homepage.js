import AboutCard from "../component/Homepage/About";
import Button from "../component/button";
import CarouselFadeExample from "../component/Homepage/carsoul";
import CoursesSwipper from "../component/Homepage/CoursesSwipper";
import Footer from "../component/Homepage/Footer";
import NavBar from "../component/Homepage/NavBar";
import News from "../component/Homepage/News";
import TopCATEGORIES from "../component/Homepage/Topcat";

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