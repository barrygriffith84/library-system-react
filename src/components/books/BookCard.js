import React, { Component } from 'react';

class BookCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3><span className="card-bookname">{this.props.book.title}</span></h3>
                    <p>Author: {this.props.book.author}</p>
                    <p>Genre: {this.props.book.genre}</p>
                    <p>ISBN: {this.props.book.isbn}</p>
                </div>
            </div>
        );
    }
}

export default BookCard;