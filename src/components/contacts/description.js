import React from "react";
import "./description.css";
import Avatar from "react-avatar";
const Description = ({contact})=>{
    const {name,email,company={name:"abc"}} = contact;
    return(
    <div class="deswrap">
        <div className="avatar">
        <Avatar className="mr-2" name={name} size="45" round={true} /> 
        </div>
        <div>
            <div>
            Name:{name} 
            </div>
            <div>
            Email Adress:{email}
            </div>
            <div>
            Company:{company.name}
            </div>
        </div>
    </div>
    )
}
export default Description