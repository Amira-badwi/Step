import { useState, useEffect } from "react";
import { Buttondelete } from "../BUTTON";
import { Pdf } from "./pdfview";
import resume from "../../../assets/my cv.pdf"
function Pdfpage() {

  const [modal, setModal]=useState(false);
  const [resumee, setResume]=useState(resume);



  return (
    <div className="container pdfstyle">
      <br></br>

      <Buttondelete setModal={setModal}/>

      {modal===true&&(
        <Pdf setModal={setModal} resume={resumee}/>
      )}

    </div>
  );
}

export default Pdfpage;