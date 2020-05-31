import React, { Component } from 'react';

class PatronCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3><span className="card-bookname">{this.props.book.name}</span></h3>
                    <p>Contact Info: {this.props.book.contactInfo}</p>
                    <p>DOB: {this.props.book.dob}</p>
                </div>
            </div>
        );
    }
}

export default PatronCard;