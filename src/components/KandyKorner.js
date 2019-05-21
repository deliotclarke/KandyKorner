import React, { Component } from 'react'

import StoreList from './store/StoreList.js'
import EmployeeList from './employee/EmployeeList.js'
import CandyList from './candy/CandyList'


export default class KandyKorner extends Component {

  state = {
    candies: [],
    employees: [],
    stores: []
  }

  render() {
    return (
      <section>
        <h1>Kandy Korner!</h1>
        <StoreList stores={this.state.stores} />
        <EmployeeList employees={this.state.employees} />
        <CandyList candies={this.state.candies} />
      </section>
    )
  }

}