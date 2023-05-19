import React from "react";

const Hello = () => {
  // return (
  //   <div>
  //     <h1>"Hello"</h1>
  //   </div>
  // )
  return React.createElement('div', { id: 'hello', className: 'dummyClass' },
    React.createElement('h1', null, 'Hi there!')
  )
}

export default Hello;