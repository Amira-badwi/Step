import { Link } from "react-router-dom";
import notfound from "../../assets/404.webp";
function Notfound(){
return(
    <>
    <div  style={{display: 'flex',alignItems: 'center',justifyContent: 'center', height: '90vh'}}>
        <div>
            <br/>
            <br/>
            <h2 style={{textAlign:'center', color: 'rgb(1, 1, 73)', fontFamily: '"Poppins", sans-serif',fontWeight:'bold'}}>Oops,404 Error!</h2>
            <img src={notfound}  />
            <p style={{textAlign:'center', color: 'rgb(1, 1, 73)',fontSize:'18px'}} > <Link to={'/'}>Go to Homepage </Link></p>
            </div>

            
        </div>
  
    {/* <img className="w-75 d-block m-auto" src={notfound}/> */}
    </>
)
}
export default Notfound;