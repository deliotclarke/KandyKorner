import React, { Component } from 'react'

export default class Stores extends Component {

  render() {
    return (
      <section className="stores">
        <h2>Stores</h2>
        <div className="card m-3">
          <ul className="list-group list-group-flush">
            {
              this.props.stores.map(store => {
                return <li className="list-group-item" key={store.id}>{store.storeName.toUpperCase()}</li>
              })
            }
          </ul>
        </div>
      </section>
    )
  }
}