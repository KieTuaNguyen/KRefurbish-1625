// Import nhanh bang 'rce + tab'
import React, { Component } from 'react'

export class EventBind extends Component {
  // Import nhanh CONSTRUCTOR bang 'rconst + tab'
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello'
    }
    // BIND in the class constructor
    // this.clickHandler = this.clickHandler.bind(this)

  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye!'
  //   })
  // }

  // Using arrow function
  // RECOMMENDED
  clickHandler = () => {
    this.setState({
      message: 'Goodbye!'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Using bind */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Using arrow function */}
        {/* RECOMMENDED */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* Binding in the class constructor */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind