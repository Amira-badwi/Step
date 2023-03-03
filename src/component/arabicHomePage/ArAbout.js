import'./arAbout.css'
import photo2 from '../../images/education.jpg'
const ArAboutCard = () => {
  return (
    <> 
    <div className="container text-center mt-3" dir='rtl'>
    <div className="row">
      <div className="col-12 mt-5 col-md-6 col-lg-6 m-auto">
        <h1 className="textcolor fw-bold fs-1 mt-0 h1Styles" >
        من نحن
        </h1>
        <p className='armembers fw-bold'>  برامج تقنية مستدامة لتأهيل معلمى الابتدائية للمنهج الجديد</p>

        <p className="text-dark " >
        نقوم بتدريب وتأهيل وتمكين المعلم من تدريس المنهج الجديد 
          edu 2.0 
        من خلال تزويد المعلم بالدورات والكتب والمقالات من قبل خبراء في هذا المجال وكذلك المناهج المهنية من خلال منصتنا التي ستكون متاحة دائمًا له. ومنحه شهادات بنهاية كل دورة تضاف له نقاط لمنحه مكافآت ومعززات

     </p>
        
        <button type="button" className="btn bgcolor rounded-pill w-5" >
         ابدأ</button>
          <br/>
          <p  className="text-secondary mt-4 fs-5">تابعنا</p>
          <span>
          <a href="https://www.facebook.com/"  style={{textDecoration:"none"}}>  <i className="fa-brands fa-facebook icon w-5"></i></a>
          <a href="https://twitter.com/?lang=en" style={{textDecoration:"none"}}> <i className="fa-brands fa-twitter icon w-5"></i></a>
          <a href="https://www.instagram.com/" style={{textDecoration:"none"}}>  <i className="fa-brands fa-instagram icon w-5"></i></a>
            
          </span>

        </div>
        <div className="col-6 d-none d-lg-block mt-5">
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

export default ArAboutCard