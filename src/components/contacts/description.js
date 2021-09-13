import React from "react";
import "./description.css";
import Avatar from "react-avatar";
const Description = ({contact})=>{
    const {name,email,company={name:"abc"},adress = {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },website} = contact;
    return(
    <div class="deswrap">
        <div className="avatar">
        <Avatar className="mr-2" name={name} size="45" round={true} /> 
        </div>
        <div className="content">
            <div className="name">
            Name:{name} 
            </div>
            <div className="details">
            Email Adress:{email}
            </div>
            <div className="details">
            Company:{company.name}
            </div>
            <div className="details">
            Website:{website}
            </div>
            <div className="details">
            Address:{adress.street},{adress.city}
            </div>
        </div>
    </div>
    )
}
export default Description