
import "./category_nav.css";
import List from "./sidenav_ul";
import logo from "../../assets/undraw_selected_options_re_vtjd.svg"

export default function NavCategory(){
   const content_category=[ { componentname:"CoursesLi",  title:"Courses" ,to:"/courses"  ,icon:"fa-solid fa-list " },{componentname:"BookLi", title:"Books" ,to:"/book/Teaching_strategies" ,icon:"fa-solid fa-book" }];
       
    return(<>
<nav  className=" d-block bg-white w-100"  >
    <div  style={{"top":90 ,"position":"fixed" ,overflowY:"scroll"  ,height:550 ,width:230}}>
    <img src={logo} width="200px"/>
{
    content_category.map((item)=>{
        return(<>
                <List namee={item.componentname} to={item.to} icon={item.icon} head={item.title} />
        </>)
    })
}      
    </div>
  </nav>
    </>)
}