/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import logo1 from "./../assets/special-need-child2.jpeg";
import logo from "./../assets/evaluation methods.webp";
// import logo1 from "./../assets/special-need-child3.jpeg";
import logo4 from "./../assets/Mental skills.jpeg";
import logo3 from "./../assets/Teaching strategy.webp";
import logo2 from "./../assets/math.webp";
import logo5 from "./../assets/Human Development.webp";
import logo6 from "./../assets/science.webp";
import logo7 from "./../assets/Educational games.webp";
import logo8 from "./../assets/Digital transformation.webp";
import headlogo from "./../assets/undraw_details_8k13.svg";

import "./catogry.css";
import Course_Catogry from "../component/coursecatogery";
export default  function CourseCatogry(){
const catogry=["calendar methods" ,"Dealing with special needs children"
,"Teaching strategy" ,"mathematics" ,"Mental skills" ,"Human development and psychological counseling"
,"Sciences" ,"Educational games" ,"Digital transformation"];
    return(<>
       
        
        <h2 className="text-center text-light"><strong>Courses Categories</strong></h2>   
        <img src={headlogo} className="d-none d-lg-block" width={300} height={600} style={{float:"right"}} />

    <div className="container">

	<div className="row">
        
    <Course_Catogry src={logo} title={catogry[0]} count={3} />
    <Course_Catogry src={logo1}  title={catogry[1]}  count={6}/>
    <Course_Catogry src={logo2}  title={catogry[3]} count={11}/>
    <Course_Catogry src={logo3}  title={catogry[2]} count={10} />
    <Course_Catogry src={logo4}  title={catogry[4]}  count={11} />
    <Course_Catogry src={logo5}  title={catogry[5]}  count={6}/>
    <Course_Catogry src={logo6}  title={catogry[6]} count={9}/>
    <Course_Catogry src={logo7}  title={catogry[7]}  count={4}/> 
    <Course_Catogry src={logo8}  title={catogry[8]}  count={4}/>

         </div></div>

    </>)
    }