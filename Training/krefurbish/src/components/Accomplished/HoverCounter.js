import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <React.Fragment>
        <h2 onMouseOver={incrementCount}>
          {this.props.name} hovered {count} times
        </h2>
      </React.Fragment>
    )
  }
}

export default UpdatedComponent(HoverCounter, 10)