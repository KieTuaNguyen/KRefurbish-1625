import React, { Component } from "react";

// BEFORE destructuring
// class Welcome extends Component {
//   render() {
//     //Accessing props using 'this' keyword
//     return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//   }
// }

// AFTER destructuring
class Welcome extends Component {
  render() {
    // Define the props in the render method
    const { name, heroName } = this.props
    // const { state1, state2 } = this.state

    //Accessing props using 'this' keyword
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    )
  }
}

export default Welcome; 