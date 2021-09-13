import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch} from 'react-icons/ai';
import { searchcontact} from "../../actions/contactAction";
import { useDispatch } from "react-redux";

import "./nav.css"

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="">
      <div style={{fontWeight:"bold"}}>Contacts</div>
      <div style={{color: "rgba(44, 43, 43, 0.431)",fontSize:"10px"}}>Find your contacts here</div>
      <div>
        <div className="innerwrap">
          <div className="searchwrap" >
            <input className="search" placeholder="Search your contacts" onChange={(e) => dispatch(searchcontact(e.target.value))}/>
            <AiOutlineSearch className="searchicon"/>
          </div>
          <div className="createbtn">
            <Link to="/contacts/add" >
              Create Contact
            </Link>
          </div>
        </div>
        <Link to="/" className="navbar-brand" style={{opacity:0}}>
            Contact Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
