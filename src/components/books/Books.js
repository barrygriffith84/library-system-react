import React, { Component } from 'react';
import BookList from './BookList'
import "./Books.css"

class Books extends Component {
    render() {
        return (
            <div className="books-container">
                <div className="books-search-container">
                <h2 className="books-heading">Search Books</h2>
                <input className="books-search-input" type="text"></input>
                </div>
                <div className="book-list-container">
                    <BookList {...this.props}/>
                </div>
            </div>

        )
    }
}

export default Books