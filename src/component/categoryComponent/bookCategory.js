import "./book_category.css";
export default function BookCategory(props){
    return(<>
        <div className="cardcontainer w-100">
            <div className="photo m-auto">
                <img  src={props.img} alt=""/>
                <div className="photos">The originals</div>
            </div>
            <div className="content">
                <p className="txt4">{props.title}</p>
         
         <div className="flex justifiy-content-around ">
         <button className="btn btn-outline-info btnstyle ">Open Book</button>
          <button className="btn btn-outline-warning  btnstyle "> Book Details</button>
            
         </div>
          </div>
          
        </div>
   
    </>)
}