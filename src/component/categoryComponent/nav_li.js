import {  NavLink } from "react-router-dom/cjs/react-router-dom";
export default function Li(props){
 
 return(<>
 
 <li className="list-group-item p-0 py-2 w-75 " key={props.keys}  >
               
                <NavLink  to="/courses" 
                        className="text-muted text-decoration-none text-wrap fs-6"
                >
                  {props.val}
                  </NavLink>
              </li>  </>)   

}
