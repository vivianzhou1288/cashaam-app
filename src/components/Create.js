import React from "react";
import "../css/Create.css";
import Form from "./Form";

function Create() {
  return (
    <div>
      <button className="topLabel">
        <i>cashaam</i>
      </button>
      <h1 classname="title">Create an account</h1>
      <p className="description">
        Enter your username below <br></br> to create your account
      </p>
      <Form />
    </div>
  );
}

export default Create;
