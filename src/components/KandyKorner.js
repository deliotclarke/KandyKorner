import Candies from './API/candy'
import Employees from './API/employees'
import Stores from './API/stores'

import StoreList from './store/StoreList.js'
import EmployeeList from './employee/EmployeeList.js'
import CandyList from './candy/CandyList'
import React, { Component } from 'react'

export default class KandyKorner extends Component {

  state = {
    candies: Candies,
    employees: Employees,
    stores: Stores
  }

  render() {
    return (
      <section>
        <h1>Kandy Korner!</h1>
        {/* <StoreList stores={this.state.stores} />
        <EmployeeList employees={this.state.employees} /> */}
        <CandyList candies={this.state.candies} />
      </section>
    )
  }

}