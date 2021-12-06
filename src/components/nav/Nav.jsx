import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Create Employee</Link>
      <Link to="list">Employee list</Link>
    </div>
  );
};

export default Nav;
