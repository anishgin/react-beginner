import './App.css';
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import uuid from "uuidv4"
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

function App() {

    const LOCAL_CONTACTS_STORAGE_KEY = "contacts"

    /*
    UseState from React Hooks
    Note 1: https://stackoverflow.com/questions/72222728/why-is-localstorage-getting-cleared-whenever-i-refresh-the-page
     */
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(localStorage.getItem(LOCAL_CONTACTS_STORAGE_KEY)) || []
    })

    /*
    Funtion gets the contact from the "AddContact" Component
     */
    const addContactHandler = (contact) => {
        console.log(contact)
        setContacts([...contacts, {id: uuid(), ...contact}])
    }

    const deleteContactHandler = (id) => {
        console.log("App Js", "deleteContactHandler", id)
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        })
        console.log("newContactList", newContactList)
        setContacts(newContactList);
    }

    /*
    UseEffect:
    To persist the data locally
    so we dont losw at every component updates
     */

    useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_CONTACTS_STORAGE_KEY))
        console.log("AppJS - retrieveContacts from localStORGAGE", retrieveContacts)
        if (retrieveContacts) setContacts(retrieveContacts);
    }, []);


    useEffect(() => {
        localStorage.setItem(LOCAL_CONTACTS_STORAGE_KEY, JSON.stringify(contacts))
    }, [contacts]);

    //const contacts = []
    /*
    const contacts = [
        {
            id: "1",
            name: "Dipesh",
            email: "dipesh.kumar@gmail.com"
        },
        {
            id: "2",
            name: "Ruban",
            email: "ruban.vithan@gmail.com"
        },
        {
            id: "3",
            name: "Selvi",
            email: "selvi.213@gmail.com"
        },
        {
            id: "4",
            name: "Anu",
            email: "deepa.anu@gmail.com"
        },
        {
            id: "5",
            name: "Anwesh",
            email: "joe.anwesh@gmail.com"
        },
        {
            id: "6",
            name: "Vivek",
            email: "ramaswamy.vivek@gmail.com"
        }
    ]

     */
    return (
        <div className="ui container">
            <Router>
                <Header/>
                <Switch>
                    <Route path="/"
                           exact
                           render={(props) => (<ContactList {...props}
                                                            contacts={contacts}
                                                            getContactId={deleteContactHandler}/>
                           )}
                    />
                    <Route path="/add"
                           render={(props) => (
                               <AddContact {...props}
                                           addContactHandler={addContactHandler}/>
                           )}
                    />

                    <Route path="/contact/:id"
                           component={ContactDetails}
                    />

                </Switch>
            </Router>

        </div>

        /*
         <Route path="/" exact component={ContactList} ></Route> --  Without Argument in component -
                                Use function if component requires props/handlers

      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={deleteContactHandler} />

      Note 3:
      In this line : <Route path="/" exact component={() => <ContactList contacts={contacts}>
      There is performance issues
      Since, the components would be recreated every time
      Use renderer instead

      */
    );
}

export default App;
