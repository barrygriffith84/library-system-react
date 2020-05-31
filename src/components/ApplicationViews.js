import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import Books from './books/Books'
import Patrons from './patrons/Patrons'




class ApplicationViews extends Component {

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/books" render={(props) => {
                    return <Books />
                }} />
                 <Route path="/patrons" render={(props) => {
                    return <Patrons />
                }} />
            </>
        )
    }
}


export default ApplicationViews