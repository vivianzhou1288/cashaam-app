import React from "react";
import { useState } from "react";

function Form() {
  const submitForm = (e) => {
    e.preventDefault();

    // console.log(firstName, lastName, number, email);
  };

  return (
    <form className="Form">
      <div>
        <input type="text" name="firstName" placeholder="First name"></input>
      </div>
      <div>
        <input type="text" name="lastName" placeholder="Last name"></input>
      </div>
      <div>
        <input type="text" name="number" placeholder="Phone number"></input>
      </div>
      <div>
        <input type="text" name="email" placeholder="Email address"></input>
      </div>
    </form>
  );
}

export default Form;
