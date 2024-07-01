import React from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom'

const ContactList = (props) => {
    console.log(props)
    //return <div className="ui celled list">Contact List</div>
    /*
    Props:
    To send info from Parent to Child
    From child to Parent ? - pass a handler (Function as Prop)
     */
    /*
    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        );
    })
     return <div className="ui celled list">{renderContactList}</div>
}
     */

    //Method 2:

        //console.log(props)
        const deleteContactHandler = (id) =>{
            console.log("This is clieced", id)
            console.log("Props", props)
            props.getContactId(id)
        }

        const contacts_tmp = [{
          id: "1",
          name: "Anish",
          email: "Anish.Ganesan@email.com"
        },
            {
                id: "2",
                name: "Anish",
                email: "Anish.Ganesan@email.com"
            }]

    console.log(" props - in ContactList   - -- - - - In Renderer list", props)
        const renderContactList =  props.contacts.map((contact) => {
            console.log(" -      - -- - - - In Renderer list", props)
            return <ContactCard contact = {contact}
                                clickHandler={deleteContactHandler}
                                key={contact.id}> </ContactCard>
        })


        return (
            <div className="main">
                <h2>Contact List
                    <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
                    </Link>
                </h2>
                <div className="ui celled list">{renderContactList}</div>
            </div>
        )


    /*
     return <div className="ui celled list">{renderContactList}</div>
     *
     */

}

export default ContactList