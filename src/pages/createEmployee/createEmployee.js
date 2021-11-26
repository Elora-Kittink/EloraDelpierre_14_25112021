import React from "react";
import { Link } from "react-router-dom";

const CreateEmployee = () => {
  return (
    <div>
      <h1>HRnet</h1>
      <Link to="/list"></Link>
      <h2>Create employee</h2>
    </div>
  );
};

export default CreateEmployee;
