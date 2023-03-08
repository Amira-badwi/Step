import { MDBCardText } from "mdb-react-ui-kit";

function HeadProfile(props) {
    return ( <>
     <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">{props.name}</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
    
    </> );
}

export default HeadProfile;