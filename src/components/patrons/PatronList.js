import React, { Component } from 'react'
import PatronCard from './PatronCard'
import PatronManager from '../../modules/PatronManager'

class PatronList extends Component {
    state = {
        patrons: [],
    }

    componentDidMount() {
        console.log("Book list: ComponentDidMount");
        PatronManager.getAll()
            .then((patrons) => {
                this.setState({
                    patrons: patrons
                })
            })
    }

    render() {

        return (
            <div className="container-cards">
                {this.state.patrons.map((currentPatron) => {
                    return (currentPatron.active) ? <PatronCard key={currentPatron.id} book={currentPatron} /> : ''
                })}
            </div>
        )
    }
}

export default PatronList