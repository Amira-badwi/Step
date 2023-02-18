// import { useState } from "react";
// import { Fragment } from 'react'
 import './Courses.css'
// import catagory1 from '../images/cate1.jpg'
//  import Carousel from 'react-elastic-carousel'
 export default function Courses() {
//     const breakPoints = [
//         { width: 1, itemToShow: 1 },
//         { width: 550, itemToShow: 2 },
//         { width: 768, itemToShow: 3 },
//         { width: 1200, itemToShow: 4 },
//     ];
//     const [data, setData] = useState(
//         [
//             { CardTitle: 'Arabic', Details: 'sdsdf', Cardimg: { catagory1 } },
//             { CardTitle: 'English', Details: 'sdsdf', Cardimg: { catagory1 } },
//             { CardTitle: 'Math', Details: 'sdsdf', Cardimg: { catagory1 } },
//             { CardTitle: 'Science', Details: 'sdsdf', Cardimg: { catagory1 } },
//         ])
//     return (<>
//         <div className='container'>
//             <Fragment>
//                 <h2 className="homeCourseHeader fw-bold">Start learning with free courses</h2>
//                 <section>

//                     <div className='Homerow'>

//                         <Carousel breakPoints={breakPoints}>
//                             {
//                                 data.map((item) => {
//                                     return <div className="col-lg-3">
//                                         <div className='Homecourse'>

//                                             <div className='homeCourse-thumb'>
//                                                 <a href='#'>
//                                                     <img src={catagory1} alt='' />
//                                                 </a>
//                                             </div>
//                                             <div className='homeCourseBody'>
//                                                 <div className='homeCourseTitle'>
//                                                     <h6>
//                                                         {item.CardTitle}
//                                                     </h6>
//                                                 </div>
//                                                 <div className='details'>
//                                                     <span>{item.Details}</span>
//                                                 </div>
//                                                 <div className='homeCourseRating'>
//                                                     <div className='homeStar'>
//                                                         <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>
//                                                     </div>
//                                                 </div>
//                                                 <div className='homefooter'>
//                                                     <div className='Homebtn'>
//                                                         <a href='#' className='btn Homebtn-Custom homePrimary'>Enroll now</a>
//                                                         <a href='#' className='btn Homebtn-Custom homePrimary2 mt-1'>Quick view</a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div></div>
//                                 }
//                                 )
//                             }
//                         </Carousel>
//                     </div>

//                 </section>
//             </Fragment>
//         </div>
//     </>)
// }
//"react-elastic-carousel": "^0.11.5"



{/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
      <div class="card">
        {/* <img src="..." class="card-img-top" alt="..."> */}
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       <div class="card d-none d-md-block">
//         {/* <img src="..." class="card-img-top" alt="..."> */}
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       <div class="card d-none d-md-block">
//         {/* <img src="..." class="card-img-top" alt="..."> */}
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>
//     </div>
//     <div class="carousel-item">
//       <div class="cards-wrapper">
//         <div class="card">
//           {/* <img src="..." class="card-img-top" alt="..."> */}
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//         <div class="card d-none d-md-block">
//           {/* <img src="..." class="card-img-top" alt="..."> */}
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//         <div class="card d-none d-md-block">
//           {/* <img src="..." class="card-img-top" alt="..."> */}
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <div class="cards-wrapper">
//         <div class="card">
//           {/* <img src="..." class="card-img-top" alt="..."> */}
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//         <div class="card d-none d-md-block">
//           {/* <img src="..." class="card-img-top" alt="..."> */}
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//         <div class="card d-none d-md-block">
//           {/* <img src="..." class="card-img-top" alt="..."> */}
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div> 


return(<>
<div class="container">
<div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        
        
<div class="row">
    
    <div class="col-lg-4" style="background-color: #13544e;margin-right: 20%;">
        <div class="card" style="background-color: #13544e;height: 100%;width: 100%;" >
          <h1 class="text-light">Nasdaq</h1>
  <div class="card-body" style="background-color:#13544e;">
    <h5 class="card-title">
      <p class="text-light">
        upwork enables us to different ourselves from our competitors and produce content higher
      </p><br/>
      <p class="text-light">Result</p>
    </h5>
    <hr/>
    <p class="card-text text-light">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
    </div>
    
    <div class="col-lg-4 orangrcolor">
        <div class="card orangrcolor" style="height: 100%;width: 100%;">
          {/* <img class="text-light orangrcolor" src="resources/microsoft.svg"> */}
  <div class="card-body orangrcolor">
    <h5 class="card-title"><p class="text-light">
      upwork enables us to different ourselves from our competitors and produce content higher
    </p><br/>
    <p class="text-light">Result</p>
  </h5>
  <hr/>
    <p class="card-text text-light">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
    </div>
    

</div>
        
        
        
    </div>
    <div class="carousel-item">
        
        
        
<div class="row">
    
    <div class="col-lg-4 orangrcolor"style="margin-right: 20%;">
      <div class="card orangrcolor"  style="height: 100%;width: 100%;">
        {/* <img class="text-light orangrcolor" src="resources/microsoft.svg"> */}
<div class="card-body orangrcolor">
  <h5 class="card-title"><p class="text-light">
    upwork enables us to different ourselves from our competitors and produce content higher
  </p><br/>
  <p class="text-light">Result</p>
</h5>
<hr/>
  <p class="card-text text-light">With supporting text below as a natural lead-in to additional content.</p>
</div>
</div>
  </div>
  <div class="col-lg-4 backgrounggreen">
    <div class="card backgrounggreen" style="height: 100%;width: 100%;">
      {/* <img class="text-light backgrounggreen" src="resources/bissell.svg"> */}
<div class="card-body backgrounggreen">
<h5 class="card-title"><p class="text-light">
  upwork enables us to different ourselves from our competitors and produce content higher
</p><br/>
<p class="text-light">Result</p>
</h5>
<hr/>
<p class="card-text text-light">With supporting text below as a natural lead-in to additional content.</p>
</div>
</div>
</div>

    
   
</div>
    
        
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div>


</>)





 }