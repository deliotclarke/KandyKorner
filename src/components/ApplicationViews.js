import { Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import React, { Component } from "react"

import CandyList from './candy/CandyList'
import StoreList from './store/StoreList'
import EmployeeList from './employee/EmployeeList'

class ApplicationViews extends Component {

  // state = {
  //   owners: this.ownersFromAPI,
  //   employees: this.employeesFromAPI,
  //   locations: this.locationsFromAPI,
  //   animals: this.animalsFromAPI,
  //   relationships: this.animalOwnerRel
  // }

  state = {
    candy: [],
    stores: [],
    employees: []
  }

  // componentDidMount() {

  //   const newState = {}

  //   CandyManager.getAll()

  // }

  //so i need when someone types into the search bar and hits enter for it to display things that match what they entered
  //i need to grab the value of the input

  render() {

    return (
      <React.Fragment >
        <Route path="/kandy" render={(props) => {
          return <CandyList candy={this.state.candy} />
        }} />
        <Route path="/stores" render={(props) => {
          return <StoreList stores={this.state.stores} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
      </React.Fragment >
    )
  }
}

export default ApplicationViews