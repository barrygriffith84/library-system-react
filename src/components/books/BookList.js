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
            <>
             <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/books/new") }}>
                        New Book
                    </button>
                </section>
            <div className="container-cards">
                {this.state.books.map((currentBook) => {
                    
                    return (currentBook.available === true) ? <BookCard key={currentBook.id} book={currentBook} delete={this.deleteBook}/>: ""
                })}
            </div>
            </>
        )
    }
}

export default BookList