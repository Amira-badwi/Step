
import "./category_nav.css";
import List from "./sidenav_ul";
import logo from "../../assets/undraw_selected_options_re_vtjd.svg"

export default function NavCategory(){
   const content_category=[ { title:"Courses" ,to:"/courses"  ,icon:"fa-solid fa-list " },{ title:"Books" ,to:"/book" ,icon:"fa-solid fa-book" }];
       
    return(<>
<nav  className=" d-block bg-white w-100" >
    <div  style={{"top":90 ,"position":"fixed" ,overflowY:"scroll"}}>
    <img src={logo} width="200px"/>

     
{
    content_category.map((item)=>{
        return(<>
                <List to={item.to} icon={item.icon} head={item.title} />
        </>)
    })
}      
    </div>
  </nav>

 
    </>)
}