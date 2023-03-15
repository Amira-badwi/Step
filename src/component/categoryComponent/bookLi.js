import {  NavLink } from "react-router-dom/cjs/react-router-dom";
export default function BookLi(props){
 return(<>
 <li className="list-group-item p-0 py-2 w-100 " key={props.keys}  >  
                <NavLink  to={`/book/${props.val.id}`} 
                  className="text-muted text-decoration-none text-wrap fs-6"
                >
                  {props.val.title}
                  </NavLink>
              </li>  
              </>)   
}
