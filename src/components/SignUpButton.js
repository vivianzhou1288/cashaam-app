import React from "react";
import { useNavigate } from "react-router-dom";

function SignUpButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="button sign-up-button"
        onClick={() => navigate("verify")}
      >
        Sign up
      </button>
    </div>
  );
}

export default SignUpButton;
