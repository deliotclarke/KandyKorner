import React, { Component } from "react"
import { Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
        <Link className="nav-link" to="#">Kandy Korner!</Link>
        <ul className="nav nav-pills ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/kandy">kandy</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stores">stores</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees">employees</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar