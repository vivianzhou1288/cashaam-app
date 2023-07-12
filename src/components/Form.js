import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    console.log({ firstName, lastName, number, email });

    navigate("ads");
  };

  function SubmitButton() {
    if (firstName && lastName && number && email) {
      return <button className="button sign-up-button">Sign up</button>;
    } else {
      return (
        <button type="button sign-up-button" disabled>
          Sign up
        </button>
      );
    }
  }

  return (
    <form onSubmit={submitForm} className="Form">
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          className="inputs"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          className="inputs"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="text"
          placeholder="Phone number"
          className="inputs"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="inputs"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
      </div>
      <div className="conditions">
        <label>
          <input type="checkbox" className="terms"></input> Agree to our Terms &
          Conditions
        </label>
      </div>
      <SubmitButton />
    </form>
  );
}

export default Form;
