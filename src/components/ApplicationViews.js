import { Route } from 'react-router-dom'
import React, { Component } from "react"

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
        <Route exact path="/" render={(props) => {
        }} />
        <Route path="/kandy" render={(props) => {
        }} />
        <Route path="/stores" render={(props) => {
        }} />
        <Route path="/employees" render={(props) => {
        }} />
      </React.Fragment >
    )
  }
}

export default ApplicationViews