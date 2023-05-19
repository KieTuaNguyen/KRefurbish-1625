// Import nhanh bang rce + tab
import React, { Component } from 'react'

export class ClassClick extends Component {

  clickHandler() {
    console.log('Clicked')
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick