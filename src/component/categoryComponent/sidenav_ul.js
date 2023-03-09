/* eslint-disable no-sparse-arrays */
import { useState } from "react";
import { Link} from "react-router-dom/cjs/react-router-dom";
import BookLi from "./bookLi";
import CoursesLi from "./nav_li";
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function List(props) {
  const catogry=[ { title:"Discipline methods" ,id:"Discipline_methods"} , {title:"Dealing with special needs children" ,id:"Dealing_with_children_with_special_needs"}
  ,{title:"Teaching strategy" ,id:"Teaching_strategies"} ,{title:"mathematics",id:"Mathematics"} ,{title: "Mental skills",id:"Mental_Skills"} ,{title:"Human development " ,
id:"Human_Development"}
  ,{title:"Sciences" ,id:"Science"},{title:"Educational games",id:"Educational_games"} ,{title:"Digital transformation",id:"Digital_transformation"}];
   
  var [show, setshow] = useState("hide");
  function toggle() {
    if (show === "show") {
      setshow("hide");
     
    } else {
      setshow("show");
    }
  }
 

  return (
    <> 
      <Link
       style={{"width":186}}
        to={props.to}
        className="border  rounded list-group-item pt-1 my-1 bg-white d-flex justify-content-between "
      >
       <hr/>
        <span    onClick={() => toggle()}>   <i className={`${props.icon} me-1`}></i>  {props.head}</span>
        <i onClick={() => toggle()} className="fa-solid fa-caret-down me-3 px-2"></i>

      </Link>
      
      <ul
        id="collapseExample2"
        className={`collapse ${show} list-group list-group-flush `}
      >
        {catogry.map((ele ,index) => {
          return (
            <>
            {
              props.name=="BookLi"?<BookLi val={ele} keys={index}  />:<CoursesLi val={ele} keys={index}  />
            }
             
            </>
          );
        })}
      </ul>
     
    </>
  );
}
