import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
import './BookDetail.css'
import CheckoutManager from '../../modules/CheckoutManager' 

class BookDetail extends Component {

  state = {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      cover: "",
      checkouts: []
  }

  componentDidMount(){
    //get(id) from BookManager and hang on to the data; put it into state
    BookManager.get(this.props.bookId)
    .then((book) => {
      this.setState({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        cover: book.cover,
        
      });
    });

    CheckoutManager.getFiltered(this.props.bookId)
    .then((checkout) => {
      this.setState({
        checkouts: checkout
      })
    })

    console.log(this.state.checkouts)
    
    // CheckoutManager.getFiltered(this.props.bookId).then((book) => book.forEach((r) => {console.log(r.patron.name)}))

  }


 

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.state.cover} alt="Cover" />
          </picture>
            <h3>Title: <span style={{ color: 'darkslategrey' }}>{this.state.title}</span></h3>
            <p>Author: {this.state.author}</p>
            <p>Genre: {this.state.genre}</p>
            <p>isbn: {this.state.isbn}</p>
            {/* <p>Checkouts: {this.state.checkouts}</p> */}
            
        </div>
      </div>
    );
  }
}

export default BookDetail;