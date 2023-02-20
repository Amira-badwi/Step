import Card from "../../component/categoryComponent/course_card";
import logo1 from "../../assets/special-need-child.jpeg";
import logo2 from "../../assets/special-need-child3.jpeg";
import logo3 from "../../assets/special-need-child4.jpeg";
export default function Courses_details(){
    return(<>
    
    <div className="card m-auto  w-100" >
    <Card img={logo1}/>
    <Card img={logo2}/>
    <Card img={logo3}/>
    </div>


    </>)
}