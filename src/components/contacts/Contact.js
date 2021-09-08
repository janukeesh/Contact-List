import React ,{useState} from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact,showdisc } from "../../actions/contactAction";
import { useDispatch } from "react-redux";


const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  const { name, phone, email, id ,company={name:"abc"}} = contact;
  return (
    <tr onClick={()=>{console.log(contact);dispatch(showdisc(contact))}} >
      <td style={{width:"10%"}}>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td style={{width:"32%",fontWeight:"bold"}}>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
      <td  style={{width:"25%",fontWeight:"bold"}}>{company.name}</td>
      {/* <td>{email}</td> */}
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          className="material-icons  text-danger"
          onClick={() => dispatch(deleteContact(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Contact;
