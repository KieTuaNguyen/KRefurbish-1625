import React from 'react'

function FragmentDemo() {
  return (
    // React.Fragment is a built-in component that allows you to group a list of children without adding extra nodes to the DOM
    // Instead of using <div>...</div>, you can use <React.Fragment>...</React.Fragment>

    // BEFORE using React.Fragment:
    // <div>
    //   <h1>Fragment Demo</h1>
    //   <p>This describes the Fragment Demo component</p>
    // </div>

    // AFTER using React.Fragment:
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This describes the Fragment Demo component</p>
    </React.Fragment>
  )
}

export default FragmentDemo