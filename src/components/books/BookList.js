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

    render() {

        return (
            <div className="container-cards">
                {this.state.books.map((currentBook) => {
                    return <BookCard key={currentBook.id} book={currentBook} />;
                })}
            </div>
        )
    }
}

export default BookList