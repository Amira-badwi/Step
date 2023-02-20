import "./catogery.css";
import { Link} from "react-router-dom/cjs/react-router-dom";

export default  function Course_Catogry(props){
    return(<>

<div className="col-md-6 col-lg-4 ">
    <Link to="/courses">
    <div className="profile-card-6">
        <img src={props.src} height={220} width={"100%"} />
        <div className="profile-name category_fonts">
            {props.title}
            </div>
        <div className="profile-overview category_fonts">
            <div className="profile-overview">
                <div className="row text-center">
                    <div className="col-xs-4">
                        <h3 >{props.count}</h3>
                        <p>courses</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Link>
</div>
	







    </>)
    }