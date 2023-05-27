import React from 'react'

function Columns() {
  return (
    // React.Fragment is a built-in component that allows you to group a list of children without adding extra nodes to the DOM
    // Instead of using <div>...</div>, you can use <React.Fragment>...</React.Fragment>
    // Or you can use the shorthand syntax: <></>

    // BEFORE using React.Fragment:
    // <React.Fragment>
    //   <td>Name</td>
    //   <td>Kiet</td>
    // </React.Fragment>

    // AFTER using React.Fragment:
    <>
      <td>Name</td>
      <td>Kiet</td>
    </>
  )
}

export default Columns