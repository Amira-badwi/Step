
import { Link } from "react-router-dom";

function MyCard(props){
 
    return(
        <div className="card mb-3 " >
        <div className="row g-0">
          <div className="col-md-4">
              {/* <img src={`https://image.tmdb.org/t/p/w500/${props.img}`} className="img-fluid rounded-start" alt="..." style={{height:"50%"}}/>  */}
          </div>
          <div className="col-md-8">
            <div className="card-body">

              <h5 className="card-title text-light fw-bolder" style={{marginTop:"50px"}}>{props.title}</h5>
              <br/>
              <p className="card-text text-light">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MyCard;