import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const Navbar = () => {
  return (
    <nav className="">
      <div className="container">
        <div className="innerwrap">
          <div className="searchwrap" >
            <input className="search"/>
          </div>
          <div className="createbtn">
            <Link to="/contacts/add" >
              Create Contact
            </Link>
          </div>
        </div>
        <Link to="/" className="navbar-brand">
            Contact Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
