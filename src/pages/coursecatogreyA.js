/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import logo1 from "./../assets/special-need-child2.jpeg";
import logo from "./../assets/evaluation methods.webp";
import logo4 from "./../assets/Mental skills.jpeg";
import logo3 from "./../assets/Teaching strategy.webp";
import logo2 from "./../assets/math.webp";
import logo5 from "./../assets/Human Development.webp";
import logo6 from "./../assets/science.webp";
import logo7 from "./../assets/Educational games.webp";
import logo8 from "./../assets/Digital transformation.webp";
import "./catogry.css";
import CourseCatogry from "../component/courseCatogeryview";

export default  function CourseCatogrypage(){
const catogry=[ { title:"calendar methods" , src: logo , count:6} , {title:"Dealing with special needs children",src: logo1 , count:10}
,{title:"Teaching strategy",src: logo3 , count:6} ,{title:"mathematics",src: logo2 , count:7} ,{title: "Mental skills",src: logo4 , count:20} ,{title:"Human development and psychological counseling" ,
src: logo5 , count:6}
,{title:"Sciences",src: logo6 , count:8 },{title:"Educational games",src: logo7 , count:6} ,{title:"Digital transformation",src: logo8 , count:16}];
    return(<>
       
        
        <h2 className="text-center text-light clip "><strong>Courses Categories</strong></h2>   

    <div className="container ">

	<div className="row">
        
{catogry.map((category)=>{
return (<>
    <CourseCatogry
     src={category.src} title={category.title} count={category.count} />

</>)
})}
    

         </div></div>

    </>)
    }