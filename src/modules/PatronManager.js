const remoteURL = "http://localhost:5002"

const PatronManager = {
  get(id) {
    return fetch(`${remoteURL}/patrons/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/patrons`).then(result => result.json())
  },
  patch(patronId) {
    return fetch(`http://localhost:5002/patrons/${patronId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"active": false})
    })
}
}

export default PatronManager