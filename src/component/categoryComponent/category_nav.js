/* eslint-disable no-sparse-arrays */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./category_nav.css";
import List from "./sidenav_ul";
import logo from "../../assets/books.jpg"

export default function NavCategory(){
   const content_category=[ { title:"Courses" ,to:"/courses",icon:"fa-solid fa-list " },{ title:"Books" ,to:"/book" ,icon:"fa-solid fa-book" }];
       
    return(<>
<nav  className=" d-block bg-white w-100">
    <div  style={{"top":90 ,"position":"fixed"}}>
     <img src={logo} style={{width:'200px',height:'200px',marginLeft:'15px'}}/> 

     
{
    content_category.map((item)=>{
        return(<>
        <div style={{marginLeft:'19px'}}>
                <List to={item.to} icon={item.icon} head={item.title} style={{color:'rgb(1, 1, 73)'}}/></div>
        </>)
    })
}      
    </div>
  </nav>

 
    </>)
}