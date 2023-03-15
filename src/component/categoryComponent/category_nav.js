
import "./category_nav.css";
import List from "./sidenav_ul";
import logo from "../../assets/undraw_new_notifications_re_xpcv.svg"

export default function NavCategory(){

   
    const content_category=[ { componentname:"CoursesLi",  title:"Courses" ,to:"/courses"  ,icon:"fa-solid fa-list " },{componentname:"BookLi", title:"Books" ,to:"/book/Teaching_strategies" ,icon:"fa-solid fa-book" }];       
    return(<>
<nav  className=" d-block bg-white w-100"  style={{marginLeft:'19px'}}>
    <div  style={{"top":90 ,"position":"fixed" ,overflowY:"scroll"  ,height:550 ,width:170}}>
    <img src={logo} width="200px"/>
{
    content_category.map((item)=>{
        return(<>
                <List namee={item.componentname} to={item.to} icon={item.icon} head={item.title}  style={{color:'rgb(1, 1, 73)'}} />

        </>)
    })
}      
    </div>
  </nav>
    </>)
}