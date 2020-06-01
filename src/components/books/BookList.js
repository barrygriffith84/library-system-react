import React, { Component } from 'react'
import BookCard from './BookCard'
import BookManager from '../../modules/BookManager'

class BookList extends Component {
    state = {
        books: [],
    }

    componentDidMount() {
        console.log("Book list: ComponentDidMount");
        BookManager.getAll()
            .then((books) => {
                this.setState({
                    books: books
                })
            })
    }

    deleteBook = id => {
        BookManager.delete(id)
        .then(BookManager.getAll)
        .then((parsedBooks) => {
            this.setState({
                books: parsedBooks
            })
        })
    }

    render() {

        return (
            <div className="container-cards">
                {this.state.books.map((currentBook) => {
                    
                    return (currentBook.available) ? <BookCard key={currentBook.id} book={currentBook} delete={this.deleteBook}/> : ""
                })}
            </div>
        )
    }
}

export default BookList