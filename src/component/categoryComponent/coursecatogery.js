import "./catogery.css";
import { Link} from "react-router-dom/cjs/react-router-dom";

export default  function Course_Catogry(props){
    return(<>

<div className="col-md-6 col-lg-4 ">
    <Link to={`/course/${props.id}`}>
    <div className="profile-card-6">
        <img src={props.src} height={220} width={"100%"} />
        <div className="profile-name category_fonts">
            {props.title}
            </div>
       
    </div>
    </Link>
</div>
	







    </>)
    }