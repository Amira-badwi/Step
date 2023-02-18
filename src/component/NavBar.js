import logo from '../images/logo2.png'
import'./Navbar.css'
export default function NavBar(){
    return (<>
 <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#">
    <div className='NavbarLogo'>
         <img 
          className="d-block img"
          src={logo}
          alt="Step logo"
        /></div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item Textcolor">
          <a class="nav-link active Textcolor" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link Textcolor" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle Textcolor" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            categories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success bgcolor" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    </>)
}