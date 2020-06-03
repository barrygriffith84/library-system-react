import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
import './BookForm.css'

class BookForm extends Component {
    state = {
        title: "",
        author: "",
        genre: "",
        isbn: "",
        cover: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create book      object, invoke the BookManager post method, and redirect to the full book list
    */
    constructNewBook = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.author === "" || this.state.genre === "" || this.state.isbn === "" || this.state.cover === "") {
            window.alert("Please input a value for all fields");
        } else {
            this.setState({ loadingStatus: true });
            const book = {
                title: this.state.title,
                author: this.state.author,
                genre: this.state.genre,
                isbn: this.state.isbn,
                cover: this.state.cover,
                available: true,
            };

            // Create the book and redirect user to book list
            BookManager.post(book)
                .then(() => this.props.history.push("/books"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="title"
                                placeholder="Title"
                            />
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="author"
                                placeholder="Author"
                            />
                            <label htmlFor="author">author</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="genre"
                                placeholder="Genre"
                            />
                            <label htmlFor="genre">Genre</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="isbn"
                                placeholder="ISBN"
                            />
                            <label htmlFor="isbn">ISBN</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="cover"
                                placeholder="Cover"
                            />
                            <label htmlFor="cover">Cover</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewBook}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default BookForm