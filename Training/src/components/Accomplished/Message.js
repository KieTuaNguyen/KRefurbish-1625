import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Welcome visitor'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Click cho zui de test phan State thui!'
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click here</button>
      </div>
    )
  }
}

export default Message; 