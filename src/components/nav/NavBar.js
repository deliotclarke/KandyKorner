import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="#">Kandy Korner</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/kandy">kandy</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stores">stores</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/locations">locations</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar