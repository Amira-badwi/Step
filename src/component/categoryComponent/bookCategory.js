import Pdfpage from "../../pages/categorypages/pdf/pdfpage";

import "./book_category.css";
export default function BookCategory(props){

    return(<>
    <div className='container'>
            <div className='row'>
        <div className="cardcontainer w-100  col-lg-12 col-md-6 col-sm-3">
            <div className="photo m-auto">
                <img  src={props.img} alt=""/>
                <div className="photos">The originals</div>
                <p className="txt4 " >{props.title}</p>
                {/* <button className="  btnStyle w-10"  > enroll </button> */}
                <div className="text-center d-flex justify-content-between">
                <Pdfpage pdf={props.pdf}/></div>
            {/* </div>
            <div className="content ">
         <div className="text-center d-flex justify-content-between"> */}
         {/* <button className="  btnStyle w-10"  > enroll </button> */}
       {/* <Pdfpage pdf={props.pdf}/>  </div>
          </div> */}
        </div>
        </div>
        </div>
        </div>
      {/* <div className='container'>
            <div className='row'>
            <div className="card-contauner col-12">
            <div className="image-contauner">
                <img src={props.img} alt=''/>
            </div>
            <div className='content-contauner'>
            <div className="title-contauner">
<h3> {props.title}</h3>
            </div>
            <div className="body-contauner">
<h3> {props.title}</h3>
            </div>
            </div>
           
            <div className="button-contauner">
<button>
    <a>
        view
    </a>
</button>
            </div>
        </div>
            </div>
        </div>
        */}
   
    </>)
}