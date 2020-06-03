import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
                <button type="button" onClick={()=> this.props.delete(this.props.book.id)}>Delete</button>
                <Link to={`/books/${this.props.book.id}`}><button>Details</button></Link>
            </div>
        );
    }
}

export default BookCard;