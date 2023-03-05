import Pdfpage from "../../pages/categorypages/pdf/pdfpage";

import "./book_category.css";
export default function BookCategory(props){

    return(<>
        <div className="cardcontainer w-100">
            <div className="photo m-auto">
                <img  src={props.img} alt=""/>
                <div className="photos">The originals</div>
                <p className="txt4 " >{props.title}</p>

            </div>
            <div className="content ">
         
         <div className="text-center d-flex justify-content-between">
         <button className="  btnStyle w-10"  > enroll </button>
       <Pdfpage/>
         </div>
          </div>
          
        </div>
   
    </>)
}