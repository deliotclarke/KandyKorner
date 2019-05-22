const baseURL = 'http://localhost:5002'

export default {
  getAll() {
    return fetch(`${baseURL}/employees`).then(e => e.json())
  }
}