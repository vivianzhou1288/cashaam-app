import React from "react";
import "../css/Create.css";
import Form from "./Form";

function Create() {
  return (
    <div className="create">
      <button className="topLabel">
        <i>cashaam</i>
      </button>
      <h1 className="createTitle">Create an account</h1>
      <p className="description">
        Enter your username below <br></br> to create your account
      </p>
      <Form />
      <p>Already a user? Sign in</p>
    </div>
  );
}

export default Create;
