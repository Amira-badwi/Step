import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./coursecard.css";
export default function Card(props){


    return(
        <>
        <Link to={props.to} className="text-decoration-none">
     <div className="row g-2 w-100 bg-white">

    <div className="col-md-4 " >

    <div className="hoverdiv text-center w-100  ">
    
 <h5 className="text-white">Preview Course</h5>
    </div>
    <div>
      <img src={props.img} className="rounded-start w-100 my-1 " height={"250px"} width={"310px"} alt="course image not found"/></div>
    </div>
    
    <div className="col-md-8">
      <div className="card-body">
      <div className="courestitleeStyle">  <h5 className="card-titlee text-center col-6"> {props.courseName}</h5></div>
        <p className="card-text couresdescStyle"> {props.courseDescription} </p>
        {/* <p className="card-text"><small className="text-muted">Last </small></p> */}
<span style={{color:' rgb(1, 1, 73)'}}><i  className="fa-solid fa-person personIcon"></i>
 123</span>
  </div>
  </div>
</div>


</Link>
        </>
    )
}