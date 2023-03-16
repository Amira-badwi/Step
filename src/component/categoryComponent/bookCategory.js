import Pdfpage from "../../pages/categorypages/pdf/pdfpage";

import "./book_category.css";
export default function BookCategory({element,saved}){

    return(<>
    <div className='container m-3'>
            <div className='row'>
        <div className="cardcontainer col-lg-12 col-md-12 col-12">
            <div className="photo m-auto">
                <img  src={element.bookImage} alt=""/>
                <div className="photos">The originals</div>
                <p className="txt4 " >{element.bookName}</p>
                {/* <button className="  btnStyle w-10"  > enroll </button> */}
                <div className="text-center d-flex justify-content-between">
                <Pdfpage pdf={element.book} id={element}  saved= {saved} />
                </div>
         
        </div>
        </div>
        </div>
        </div>
   
    </>)
}