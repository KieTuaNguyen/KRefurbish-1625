import React from "react";

// function Greet() {
//   return <h1>Hello Kiet!</h1>
// }

// BEFORE destructuring
// const Greet = (props) => {
//   return (
//     // Have to enclose all the elements in a single div
//     <div>
//       <h1>Hello {props.name}!</h1>
//       <p>Hero name is {props.heroName}</p>
//       {props.children}
//     </div>

//   )
// }

// AFTER destructuring
const Greet = (props) => {
  // Define the props in the render method
  const { name, heroName } = props
  return (
    // Have to enclose all the elements in a single div
    <div>
      <h1>Hello {name}!</h1>
      <p>Hero name is {heroName}</p>
    </div>

  )
}

export default Greet;
