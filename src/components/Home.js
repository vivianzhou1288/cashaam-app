import React from "react";
import "../css/Home.css";
import SignInButton from "./SignInButton";
import AccountButton from "./AccountButton";

function Home() {
  return (
    <div className="home">
      <h1 className="title">Buy, Sell, and Inspire</h1>
      <img
        src="/assets/homepage.png"
        className="homeImage"
        alt="People standing together"
      ></img>
      <SignInButton />
      <AccountButton />
      <p>Continue as Guest</p>
    </div>
  );
}

export default Home;
