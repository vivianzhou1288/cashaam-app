import React from "react";
import { useNavigate } from "react-router-dom";

function AccountButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="button create-account-button"
        onClick={() => navigate("create")}
      >
        Create an account
      </button>
    </div>
  );
}

export default AccountButton;
