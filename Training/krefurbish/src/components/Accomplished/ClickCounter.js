import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <React.Fragment>
        <button onClick={incrementCount}>
          {this.props.name} clicked {count} times
        </button>
      </React.Fragment>
    )
  }
}

export default UpdatedComponent(ClickCounter, 5)