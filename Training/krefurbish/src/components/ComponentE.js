import React, { Component } from 'react'
import UserContext from './userContext'
import ComponentF from './ComponentF'

class ComponentE extends Component {
  render() {
    return (
      <h1>
        Component E context {this.context}
        <ComponentF />
      </h1>
    )
  }
}

ComponentE.contextType = UserContext

export default ComponentE