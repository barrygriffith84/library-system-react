import React, { Component } from "react"
import BookManager from "../../modules/BookManager"
import "./BookForm.css"

class BookEditForm extends Component {
    //set the initial state
    state = {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingBook = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedBook = {
        id: this.props.match.params.bookId,
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        isbn: this.state.isbn,
        available: true,
      };

      BookManager.update(editedBook)
      .then(() => this.props.history.push("/books"))
    }

    componentDidMount() {
      BookManager.get(this.props.match.params.bookId)
      .then(book => {
          this.setState({
            title: book.title,
            author: book.author,
            genre: book.genre,
            isbn: book.isbn,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                value={this.state.title}
              />
              <label htmlFor="title">Title</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="author"
                value={this.state.author}
              />
              <label htmlFor="author">Author</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="genre"
                value={this.state.genre}
              />
              <label htmlFor="genre">Genre</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="isbn"
                value={this.state.isbn}
              />
              <label htmlFor="isbn">ISBN</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingBook}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default BookEditForm