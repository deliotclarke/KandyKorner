const baseURL = 'http://localhost:5002'

export default {
  getAll() {
    return fetch(`${baseURL}/candy`).then(e => e.json());
  }
}