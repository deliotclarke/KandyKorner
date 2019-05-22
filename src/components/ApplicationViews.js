import { Route } from 'react-router-dom'
import React, { Component } from "react"

import CandyList from './candy/CandyList'
import StoreList from './store/StoreList'
import EmployeeList from './employee/EmployeeList'
import CandyManager from '../modules/CandyManager'
import EmployeeManager from '../modules/EmployeeManager'
import StoresManager from '../modules/StoresManager';

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

  componentDidMount() {

    const newState = {}

    CandyManager.getAll()
      .then(candy => newState.candy = candy)
      .then(() => EmployeeManager.getAll())
      .then(employees => newState.employees = employees)
      .then(() => StoresManager.getAll())
      .then(stores => newState.stores = stores)
      .then(() => this.setState(newState))
  }

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