import React from "react";
import user from "../images/img_large.png"
import {Link} from "react-router-dom";

const ContactDetails = (props) => {
    console.log("Props - Contact details Page", props)
    return (
        <div className="main">
            <div className="ui card left">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
            </div>
            <div className="content">
                <div className="header">{props.location.state.name}</div>
                <div className="description">Email : {props.location.state.email} <br/>
                    Unique ID: {props.location.state.id} </div>
            </div>
            <Link to="/">
                <button className="ui button blue right">Back to contacts</button>
            </Link>
        </div>
    )
}

export default ContactDetails;