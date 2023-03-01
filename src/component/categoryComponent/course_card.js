import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./coursecard.css";
export default function Card(props){


    return(
        <>
        <Link to={props.to} className="text-decoration-none">
     <div className="row g-2 w-100 bg-white">

    <div className="col-md-4  " >

    <div className="hoverdiv text-center w-100  ">
    
 <h5 className="text-white">Preview Course</h5>
    </div>
      <img src={props.img} className="rounded-start w-100 my-1 " height={"250px"} width={"310px"} alt="..."/>
  
  
    </div>
    
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-titlee bg-info text-center text-white"> {props.courseName}</h5>
        <p className="card-text"> {props.courseDescription} </p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
<span>        <i  className="fa-solid fa-person"></i>
 123</span>
  </div>
  </div>
</div>
</Link>
        </>
    )
}