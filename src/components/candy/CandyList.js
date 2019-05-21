import React, { Component } from 'react'
import CandyTypes from '../API/candytypes.js'

export default class Candy extends Component {

  state = {
    candyTypes: CandyTypes
  }

  render() {
    return (
      <section className="candy">
        <h2>All Our Candy:</h2>
        <ul>
          {
            this.props.candies.map(candy =>
              <li key={candy.id}>
                {candy.name}
              </li>
            )
          }
        </ul>
      </section>
    )
  }
}