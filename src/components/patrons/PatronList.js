import React, { Component } from 'react'
import PatronCard from './PatronCard'
import PatronManager from '../../modules/PatronManager'

class PatronList extends Component {
    state = {
        patrons: [],
    }

    patchPatron = id => {
        PatronManager.patch(id)
        .then(PatronManager.getAll)
        .then((parsedPatrons) => {
            this.setState({
                patrons: parsedPatrons
            })
        })
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
                    return (currentPatron.active) ? <PatronCard key={currentPatron.id} patron={currentPatron} patch={this.patchPatron}/> : ''
                })}
            </div>
        )
    }
}

export default PatronList