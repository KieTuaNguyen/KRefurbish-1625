import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      // Step3: Consume the context value
      <UserConsumer>
        {
          (username) => {
            return <h1>Hello {username}</h1>
          }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF