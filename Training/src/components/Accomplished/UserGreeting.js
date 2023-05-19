import React, { Component } from 'react'

export class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    // WAY1: if/else statement
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Kiet!</div>
    // }
    // else {
    //   message = <div>Welcome Guest!</div>
    // }
    // return <div>{message}</div>

    // WAY2: Ternary conditional operator
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       Welcome Kiet!
    //     </div>
    //   )
    // }
    // else {
    //   return (
    //     <div>
    //       Welcome Guest!
    //     </div>
    //   )
    // }

    // WAY3: Ternary conditional operator (Like way2 but shorter) (Short circuit operator)
    return this.state.isLoggedIn ? (<div>Welcome Kiet!</div>) : (<div>Welcome Guest!</div>)
  }
}
export default UserGreeting