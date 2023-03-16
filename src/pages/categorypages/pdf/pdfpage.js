import { useState, useEffect } from "react";
import { Buttondelete } from "../BUTTON";
import { Pdf } from "./pdfview";
function Pdfpage(props) {

  const [modal, setModal]=useState(false);



  return (
    <div className="container pdfstyle">
      <br></br>

      <Buttondelete setModal={setModal} id={props.id} saved={props.saved}/>

      {modal===true&&(
        <Pdf setModal={setModal} resume={props.pdf}/>
      )}

    </div>
  );
}

export default Pdfpage;