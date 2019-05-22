import React, { Component } from 'react'

export default class Employees extends Component {

  render() {
    return (
      <section className="employees">
        <h2>Employees</h2>
        <ul>
          {
            this.props.employees.map(employee => {
              return <li key={employee.id}><strong>{employee.employeeFirstName} {employee.employeeLastName}</strong><p>Company: {employee.Company}</p></li>
            })
          }
        </ul>
      </section>
    )
  }
}