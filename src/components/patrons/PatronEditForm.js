import React, { Component } from "react"
import PatronManager from "../../modules/PatronManager"
import "./PatronForm.css"

class PatronEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      contactInfo: "",
      dob: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingPatron = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedPatron = {
        id: this.props.match.params.patronId,
        name: this.state.name,
        contactInfo: this.state.contactInfo,
        dob: this.state.dob,
        active: true,
      };

      PatronManager.update(editedPatron)
      .then(() => this.props.history.push("/patrons"))
    }

    componentDidMount() {
      PatronManager.get(this.props.match.params.patronId)
      .then(patron => {
          this.setState({
            name: patron.name,
            contactInfo: patron.contactInfo,
            dob: patron.dob,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="name">Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="contactInfo"
                value={this.state.contactInfo}
              />
              <label htmlFor="contactInfo">Contact Info</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="dob"
                value={this.state.dob}
              />
              <label htmlFor="dob">DOB</label>

            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingPatron}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default PatronEditForm