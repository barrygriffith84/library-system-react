import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import Books from './books/Books'
import Patrons from './patrons/Patrons'
import BookDetail from './books/BookDetail'
import BookForm from './books/BookForm'
import PatronForm from './patrons/PatronForm'



class ApplicationViews extends Component {

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/books" render={(props) => {
                    return <Books {...props} />
                }} />
                <Route exact path="/patrons" render={(props) => {
                    return <Patrons {...props}/>
                }} />
                <Route path="/books/:bookId(\d+)" render={(props) => {
                    return <BookDetail bookId={props.match.params.bookId} />
                }} />
                <Route path="/books/new" render={(props) => {
                    return <BookForm {...props} />
                }} />
                <Route path="/patrons/new" render={(props) => {
                    return <PatronForm {...props} />
                }} />
            </>
        )
    }
}


export default ApplicationViews