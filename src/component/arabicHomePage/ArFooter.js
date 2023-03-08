import'./arFooter.css'
export default function ArFooter(){
    return (<>

  <footer className='mt-2'  dir='rtl' >
  <div className="container">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">فئات</span>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">المنتج 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">المنتج 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">الخطط والأسعار</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">أسئلة مكررة</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">شركة</span>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">معلومات عنا</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">الدورات</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">اتصل بالدعم</span>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#"><i className="fas fa-comments"></i>دردشة مباشرة</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#"><i className="fas fa-envelope"></i>اتصل بنا</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#"><i className="fas fa-star"></i>إعطاء ردود الفعل</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>
    
    <div className="row text-center">
      <div className="col-md-4 box">
    
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
            <a href="#" className='text-light'>سياسة الخصوصية</a>
          </li>
          <li className="list-inline-item ">
            <a href="#" className='text-light'>شروط الاستخدام</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    
    </>)
}