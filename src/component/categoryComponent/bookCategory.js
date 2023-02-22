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
         
         <div className="text-center m-auto d-flex justify-content-center">
         <button className="  btnStyle "  >Open Book</button>
          <button className="  btnStyle  "> Book Details</button>  
         </div>
          </div>
          
        </div>
   
    </>)
}