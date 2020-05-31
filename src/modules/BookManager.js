const remoteURL = "http://localhost:5002"

const BookManager = {
  get(id) {
    return fetch(`${remoteURL}/books/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/books`).then(result => result.json())
  }
}

export default BookManager