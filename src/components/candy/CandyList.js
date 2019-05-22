import React, { Component } from 'react'
import CandyItem from './CandyItem'

export default class Candy extends Component {

  render() {
    return (
      <section className="candy" >
        <h2>All Our Kandy</h2>
        <ol>
          {
            this.props.candy.map(item =>
              <CandyItem className="candyItem" key={item.id} candy={item} />
            )
          }
        </ol>
      </section >
    )
  }
}