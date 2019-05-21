import React, { Component } from 'react'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "bootstrap/dist/css/bootstrap.min.css"


import StoreList from './store/StoreList.js'
import EmployeeList from './employee/EmployeeList.js'
import CandyList from './candy/CandyList'


export default class KandyKorner extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    )
  }

}