import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form } from "react-bootstrap";
import Pg1 from "./Pg1";
import "./SignUp.css";

import Pg2 from "./Pg2";
import Pg3 from "./Pg3";
function Sign_Up() {
  const [Page, setPage] = useState(1);
  const [Prog, setProg] = useState(40);
  const changePageinc = () => {
    //console.log(Page);
    const prog = Prog + 30;
    setProg(prog);
    const nextPge = Page + 1;
    setPage(nextPge);
  };
  const changePagedec = () => {
    const prog = Prog - 30;
    setProg(prog);
    const backPge = Page - 1;
    setPage(backPge);
  };

  return (
    <div className="mb-4 container">
      <center>
        <h2 className="logHedear">SIGN UP</h2>
      </center>
      <div className="progs">
        <span>{Page}/3</span>
        <ProgressBar now={Prog} />
      </div>
      {Page == 1 ? <Pg1 /> : Page == 2 ? <Pg2 /> : Page == 3 ? <Pg3 /> : null}
      {Page < 3 && Page >= 1 && (
        <button className="Twobtn" onClick={() => changePageinc()}>
          Next
        </button>
      )}
      {Page > 1 && (
        <button className="Twobtn" onClick={() => changePagedec()}>
          Back
        </button>
      )}
      {/* <Buttons Name="Next" key={Page} /> */}
      {/* <Buttons Name="Back" /> */}
    </div>
  );
}
export default Sign_Up;
