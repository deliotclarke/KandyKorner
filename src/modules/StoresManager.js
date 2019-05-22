const baseURL = 'http://localhost:5002'

export default {
  getAll() {
    return fetch(`${baseURL}/stores`).then(e => e.json())
  }
}