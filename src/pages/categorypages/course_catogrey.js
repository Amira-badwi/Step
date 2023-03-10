/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import logo1 from "../../assets/special-need-child2.jpeg";
import logo from "../../assets/evaluation methods.webp";
import logo4 from "../../assets/Mental skills.jpeg";
import logo3 from "../../assets/Teaching strategy.webp";
import logo2 from "../../assets/math.webp";
import logo5 from "../../assets/Human Development.webp";
import logo6 from "../../assets/science.webp";
import logo7 from "../../assets/Educational games.webp";
import logo8 from "../../assets/Digital transformation.webp";
import TS from "../../assets/TS2.jpg";
import Math from "../../assets/Math.jpg";
import SC from "../../assets/SC.jpg";
import DT from "../../assets/DT.jpg";
import MS from "../../assets/MS.jpg";
import EG from "../../assets/EG.jpg";
import "./catogry.css";
import Course_Catogry from "../../component/categoryComponent/coursecatogery";

export default  function CourseCatogry(){
const catogry=[ { title:"Discipline methods" , src: logo , count:6  ,id:"Discipline_methods"} , {title:"Dealing with special needs children",src: logo1 , count:10 ,id:"Dealing_with_children_with_special_needs"}
,{title:"Teaching strategy",src: TS , count:6 ,id:"Teaching_strategies"} ,{title:"mathematics",src: Math , count:7 ,id:"Mathematics"} ,{title: "Mental skills",src: MS , count:20 ,id:"Mental_Skills"} ,{title:"Human development " ,
src: logo5 , count:6 ,id:"Human_Development"}
,{title:"Sciences",src: SC , count:8 ,id:"Science"},{title:"Educational games",src: EG , count:6 ,id:"Educational_games"} ,{title:"Digital transformation",src: DT , count:16 ,id:"Digital_transformation"}];
    return(<>
       
        
        {/* <h2 className="text-center text-light clip  "><strong>Courses Categories</strong></h2>    */}

    <div className="container ">

	<div className="row">
        
{catogry.map((category)=>{
return (<>
    <Course_Catogry src={category.src} title={category.title} count={category.count} id={category.id} />

</>)
})}
    

         </div></div>

    </>)
    }