import './App.css';
import React from "react";
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from "./ContactList";
//import ContactCard from './ContactCard'
//import ContactList from './ContactList'

function App() {
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
  return (
      <div className="ui container">
          <Header />
          <AddContact />
          <ContactList contacts={contacts} />
      </div>
  );
}

export default App;
