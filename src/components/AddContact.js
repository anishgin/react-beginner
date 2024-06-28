import React from "react";

class AddContact extends React.Component {
    /*
    UseState :
    We dont want to re render compnent everytime
    It should be fine to just upate the elements everytime - This is possible via State
     */
    state = {
        name: "",
        email: ""
    }

    add = (e) => {
        e.preventDefault() //I dont want the page to get refreshed

        if (this.state.name === "" || this.state.email ==="") {
            alert("All fields are mandatory")
            return
        }

        console.log("State from AddContact JS", this.state)
        this.props.addContactHandler(this.state)
        this.setState({name: "",
            email: ""})

    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                               name="name"
                               placeholder="Name"
                               value={this.state.name}
                               onChange={(e) =>
                                   this.setState({name: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text"
                               name="email"
                               placeholder="eamil@srv.com"
                               value={this.state.email}
                               onChange={(e) =>
                                   this.setState({email: e.target.value})}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact