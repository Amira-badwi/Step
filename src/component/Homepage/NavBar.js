import logo from '../../images/Step.png';
import'./Navbar.css';
import {  NavLink } from "react-router-dom/cjs/react-router-dom";

export default function NavBar(){
    return (<>
 <nav className="navbar navbar-expand-lg bg-light">
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
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item Textcolor">
          <NavLink className="nav-link active Textcolor" aria-current="page" to="/courses">Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link Textcolor" to="/addCourse">Add Course</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle Textcolor" to="/login" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Login
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/register">register</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Another action</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
          </ul>
        </li>
        
      </ul>
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success bgcolor" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    </>)
}