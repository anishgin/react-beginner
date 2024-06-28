import React from "react";
import ContactCard from "./ContactCard";

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

        const renderContactList =  props.contacts.map((contact) => {
            return <ContactCard contact = {contact}
                                clickHandler={deleteContactHandler}
                                key={contact.id}> </ContactCard>
        })

        return <div className="ui celled list">{renderContactList}</div>

}

export default ContactList