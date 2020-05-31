const remoteURL = "http://localhost:5002"

const PatronManager = {
  get(id) {
    return fetch(`${remoteURL}/patrons/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/patrons`).then(result => result.json())
  }
}

export default PatronManager