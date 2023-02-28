import logo from '../../images/Step.png';
import'./Navbar.css';
import {  NavLink } from "react-router-dom/cjs/react-router-dom";
import { useContext } from 'react';
import { langContext } from '../context/langContext';

export default function NavBar(){
  const {contextlang,setcontextlang} =useContext(langContext);

    return (<>
 <nav className="navbar main_nav navbar-expand-lg  w-100" dir={`${contextlang=="En"?"ltr":"rtl"}`}>
  <div className="container-fluid">
    
    <NavLink className="navbar-brand" to="/">
    <div className='NavbarLogo'>
         <img 
          className="d-block img"
          src={logo}
          alt="Step logo"
        /></div></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse collapse_nav navbar-collapse "  id="navbarSupportedContent">
      <ul className="navbar-nav w-100 d-flex justify-content-between">
        <li className="nav-item ">
          <NavLink className="nav-link active  text-light" aria-current="page" to="/courses">
             {
      contextlang=="En"? "Courses" :" دورات تدريبية"
     }</NavLink>
        </li>
        <li className="nav-item d-flex justify-content-between">
          <NavLink className="nav-link  text-light " to="/addCourse">
          <i class="fa-solid fa-plus"></i>
     {
      contextlang=="En"? "Add Course" :"أضف دورة تدريبية"
     }
          </NavLink>
          <button className=" btn btn-outline-light fs-6 fw-bold mr-4 " onClick={()=>setcontextlang(contextlang==="En"? "Ar":"En")}>{contextlang}</button>
        </li>
         
     <li >

     <ul className="navbar-nav d-flex justify-content-between ">
      <li><NavLink className="nav-link  text-light" to="/register">
      {
      contextlang=="En"? "register" :"انشاء حساب"
     }
        </NavLink></li>
        <li><NavLink className="nav-link  text-light" to="/login"> 
        {
      contextlang=="En"? "Login" :"تسجيل دخول"
     }
        <i class="fa-solid fa-right-to-bracket"></i></NavLink></li>

        </ul>  
      </li> 
           
      
      </ul>
      
     
    </div>
  </div>
</nav>
    
    </>)
}