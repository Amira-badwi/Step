import AboutCard from "../component/About";
import Button from "../component/button";
import CarouselFadeExample from "../component/carsoul";
import Course_Catogry from "../component/coursecatogery";
import NavBar from "../component/NavBar";
import TopCATEGORIES from "../component/Topcat";

export default function Home(){
    return (<>
    <NavBar/>
    <CarouselFadeExample/>
    <AboutCard/>
    <TopCATEGORIES/>
    </>)
}