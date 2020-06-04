import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import Books from './books/Books'
import Patrons from './patrons/Patrons'
import BookDetail from './books/BookDetail'
import BookForm from './books/BookForm'
import PatronForm from './patrons/PatronForm'
import Login from './auth/Login'
import BookEditForm from './books/BookEditForm'
import PatronEditForm from './patrons/PatronEditForm'



class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/books" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Books {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }

                }} />
                <Route exact path="/patrons" render={(props) => {

                    if (this.isAuthenticated()) {
                        return <Patrons {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/books/:bookId(\d+)" render={(props) => {
                    return <BookDetail bookId={props.match.params.bookId} />
                }} />
                <Route path="/books/new" render={(props) => {
                    return <BookForm {...props} />
                }} />
                <Route path="/patrons/new" render={(props) => {
                    return <PatronForm {...props} />
                }} />
                <Route path="/login" component={Login} />
                <Route path="/books/:bookId(\d+)/edit" render={props => {
                        return <BookEditForm {...props} />
                    }}
                />
                  <Route path="/patrons/:patronId(\d+)/edit" render={props => {
                        return <PatronEditForm {...props} />
                    }}
                />
            </>
        )
    }
}


export default ApplicationViews