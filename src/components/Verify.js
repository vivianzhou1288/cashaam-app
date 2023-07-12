import React from "react";
import "../css/Verify.css";
import Code from "./Code";

function Verify() {
  return (
    <div className="verify">
      {/* <img src="/assets/arrow-left.png" className="arrow" /> */}
      <img src="/assets/verify.png" className="textImage" />
      <h1 className="verifyTitle">Enter Verification Code</h1>
      <p>We sent you an SMS to 512-850-1745</p>
      <Code />
      <button className="button verify-button">Verify</button>
      <p>Didn't get the code? Resend</p>
    </div>
  );
}

export default Verify;
