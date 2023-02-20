import'./About.css'
import photo from '../../images/photo.jpg'
import photo2 from '../../images/education.jpg'
const AboutCard = () => {
  return (
    <> 
    <div class="container text-center mt-3">
    <div class="row">
      <div class="col-12 mt-5 col-md-6 col-lg-6 m-auto">
        <h1 class="textcolor fw-bold fs-1 mt-4 h1Styles" >
         About us
        </h1>
        <p class="text-dark " >
        We train, qualify and enable the teacher to teach the new curriculum edu 2.0 by providing the teacher with courses, books and articles by experts in the field and also professional curriculums through our platform that will be always available for him. and give him certificates by the end of each course that will be added points to give him rewards and boosters
        </p>
        
        <button type="button" class="btn bgcolor rounded-pill w-5" >
          Get started</button>
          <br/>
          <p  class="text-secondary mt-4 fs-5">Follow us</p>
          <span>
          <a href="https://www.facebook.com/"  style={{textDecoration:"none"}}>  <i class="fa-brands fa-facebook icon w-5"></i></a>
          <a href="https://twitter.com/?lang=en" style={{textDecoration:"none"}}> <i class="fa-brands fa-twitter icon w-5"></i></a>
          <a href="https://www.instagram.com/" style={{textDecoration:"none"}}>  <i class="fa-brands fa-instagram icon w-5"></i></a>
            
          </span>

        </div>
        <div class="col-6 d-none d-lg-block mt-5">
        <img 
          className="d-block w-100 imgStyle2"
          src={photo2}
          alt="step photo"
        />
        </div>
    </div></div><br/><br/>

    </>
  )
}

export default AboutCard