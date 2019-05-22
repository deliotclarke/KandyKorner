import React, { Component } from 'react'

export default class CandyItem extends Component {

  render() {
    return (
      <li className="candyItem list-group-item">
        <strong>{this.props.candy.name}</strong> Type: {this.props.candy.type}
      </li>
    )
  }
}