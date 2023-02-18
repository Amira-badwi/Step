import AboutCard from "../component/About";
import Button from "../component/button";
import CarouselFadeExample from "../component/carsoul";
import Course_Catogry from "../component/coursecatogery";
import Courses from "../component/Courses";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import TopCATEGORIES from "../component/Topcat";

export default function Home(){
    return (<>
    <NavBar/>
    <CarouselFadeExample/>
    <AboutCard/>
    <TopCATEGORIES/>
    <Courses/>
    <Footer/>
    </>)
}