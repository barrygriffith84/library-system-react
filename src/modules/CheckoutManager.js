const remoteURL = "http://localhost:5002"

const CheckoutManager = {
  get(id) {
    return fetch(`${remoteURL}/patron-book/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/patron-book`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/patron-book/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  getFiltered(bookId) {
    return fetch(`${remoteURL}/patron-book?bookId=${bookId}&_expand=patron`).then(result => result.json())
  }
}


export default CheckoutManager