// Import nhanh rfce + tab = function component

import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent

// NOTE STEP 2: In the ChildComponent.js, we define a button with onClick event handler.
// The onClick event handler calls the greetHandler() method that was passed from the ParentComponent.js as a prop.
// We pass the parameter 'Child' to the greetHandler() method.