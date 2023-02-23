import logo from '../../images/Step.png';
import'./Navbar.css';
import {  NavLink } from "react-router-dom/cjs/react-router-dom";

export default function NavBar(){
    return (<>
 <nav className="navbar main_nav navbar-expand-lg  w-100">
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
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav w-100 d-flex justify-content-between">
        <li className="nav-item Textcolor">
          <NavLink className="nav-link active Textcolor text-light" aria-current="page" to="/courses">Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link Textcolor text-light" to="/addCourse">
          <i class="fa-solid fa-plus"></i>
 Add Course 
          </NavLink>
        </li>
         
     <li >
     <ul className="navbar-nav d-flex justify-content-between ">
      <li><NavLink className="nav-link Textcolor text-light" to="/register">register</NavLink></li>
        <li><NavLink className="nav-link Textcolor text-light" to="/login">Login <i class="fa-solid fa-right-to-bracket"></i></NavLink></li>

        </ul>  
      </li> 
           
      
      </ul>
      
     
    </div>
  </div>
</nav>
    
    </>)
}