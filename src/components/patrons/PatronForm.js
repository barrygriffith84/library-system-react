import React, { Component } from 'react';
import PatronManager from '../../modules/PatronManager';
import './PatronForm.css'

class PatronForm extends Component {
    state = {
        name: "",
        contactInfo: "",
        dob: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create patron     object, invoke the PatronManager post method, and redirect to the full patron list
    */
    constructNewPatron= evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.contactInfo === "" || this.state.dob === "") {
            window.alert("Please input a value for all fields");
        } else {
            this.setState({ loadingStatus: true });
            const patron = {
                name: this.state.name,
                contactInfo: this.state.contactInfo,
                dob: this.state.dob,
                active: true,
            };

            // Create the patron and redirect user to patron list
            PatronManager.post(patron)
                .then(() => this.props.history.push("/patrons"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="Name"
                            />
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="contactInfo"
                                placeholder="Contact Info"
                            />
                            <label htmlFor="contactInfo">Contact Info</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="dob"
                                placeholder="DOB"
                            />
                            <label htmlFor="dob">DOB</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewPatron}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default PatronForm