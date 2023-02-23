import Card from "../../component/categoryComponent/course_card";
import logo1 from "../../assets/special-need-child.jpeg";
import logo2 from "../../assets/special-need-child3.jpeg";
import logo3 from "../../assets/special-need-child4.jpeg";
export default function Courses_details(){
    return(<>
    
    <div className="card m-auto  w-100 my-4"  >
    <Card img={logo1} to="/viewCourse"/>
    <Card img={logo2} to="/viewCourse" />
    <Card img={logo3} to="/viewCourse"/>
    </div>


    </>)
}