/* eslint-disable no-sparse-arrays */
import { useState } from "react";
import { Link} from "react-router-dom/cjs/react-router-dom";
import Li from "./nav_li";
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function List(props) {
  const catogry = [
    "evaluation methods",
    "Dealing children with special needs ",
    "Teaching strategy",
    "mathematics",
    "Mental skills",
    "Human development ",
    "Sciences",
    "Educational games",
    "Digital transformation",
  ];
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
        className="border border-info rounded list-group-item py-2 my-1 bg-white d-flex justify-content-between "
      >
        <i className={`${props.icon} me-3`}></i>
        <span    onClick={() => toggle()}>{props.head}</span>
        <i onClick={() => toggle()} className="fa-solid fa-caret-down me-3 px-2"></i>

      </Link>
      
      <ul
        id="collapseExample2"
        className={`collapse ${show} list-group list-group-flush `}
      >
        {catogry.map((ele ,index) => {
          return (
            <>
             <Li val={ele} keys={index}/>
            </>
          );
        })}
      </ul>
     
    </>
  );
}
