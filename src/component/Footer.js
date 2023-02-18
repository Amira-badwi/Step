import'./Footer.css'
export default function Footer(){
    return (<>
    
{/* <footer class="text-center text-lg-start bg-primary text-muted text-light rounded" > 
  <section class="p-4">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4 text-dark text-light">
            For Clients
          </h6>
          <br/>
         <p class="text-light" >
          How to Hire
         </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4 text-light">
            For Talent
          </h6><br/>
          <p class="text-light" >
            How to Find Work
           </p>
          </div></div>
    </div>
  </section>
  
  

</footer> */}
  <footer className='mt-2'>
  <div className="container">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Categories</span>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Product 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Product 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Plans & Prices</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Frequently asked questions</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Company</span>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Courses</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact & Support</span>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#"><i className="fas fa-comments"></i>Live chat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#"><i className="fas fa-envelope"></i>Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#"><i className="fas fa-star"></i>Give feedback</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>
    
    <div className="row text-center">
      <div className="col-md-4 box">
        {/* <span className="copyright quick-links">Copyright &copy; Your Website
        </span> */}
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline quick-links">
          <li className="list-inline-item">
            <a href="#" className='text-light'>Privacy Policy</a>
          </li>
          <li className="list-inline-item ">
            <a href="#" className='text-light'>Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    
    </>)
}