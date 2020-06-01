import React, { Component } from 'react';

class PatronCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3><span className="card-bookname">{this.props.patron.name}</span></h3>
                    <p>Contact Info: {this.props.patron.contactInfo}</p>
                    <p>DOB: {this.props.patron.dob}</p>
                    <button type="button" onClick={()=> this.props.patch(this.props.patron.id)}>Archive</button>
                </div>
                
            </div>
        );
    }
}

export default PatronCard;