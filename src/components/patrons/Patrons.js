import React, { Component } from 'react';
import PatronList from './PatronList';

class Patrons extends Component {
    render() {
        return (
            <div className="patrons-container">
                <div className="patrons-list">
                    <h2 className="patrons-heading">List of Patrons</h2>
                <PatronList {...this.props}/>
                </div>
                
            </div>
        )
    }
}

export default Patrons