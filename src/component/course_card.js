import "./coursecard.css"
export default function Card(props){
    return(
        <>
     <div className="row g-2 w-100 bg-white">

    <div className="col-md-4  " >

    <div className="hoverdiv text-center w-100  ">
      <h6 className="bg-danger text-white">
     deal with children with  special needs
      </h6>
 <h5 className="text-white">Preview Course</h5>
    </div>
      <img src={props.img} className="rounded-start w-100 " height={"250px"} width={"310px"} alt="..."/>
  
  
    </div>
    
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-titlee bg-info text-center text-white">Course title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
<span>        <i  className="fa-solid fa-person"></i>
 123</span>
  </div>
  </div>
</div>
        </>
    )
}