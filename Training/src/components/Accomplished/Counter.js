//Import nhanh bang 'rcc + tab'
import React, { Component } from 'react'

export class Counter extends Component {

  //Import nhanh constructor bang 'rconst + tab'
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  increment() {
    // This code snippet
    // updates the state by directly specifying the new state object
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log('Callback value', this.state.count)
    //   }
    // )

    // RECOMMENDED 
    // This code snippet
    // updates the state using a function that receives the previous state 
    // and returns the new state object
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div>
          Count - {this.state.count}
          <br />
          <button onClick={() => this.increment()}>Increment</button>
          <button onClick={() => this.incrementFive()}>Increment five</button>
        </div>
      </div>
    )
  }
}

export default Counter