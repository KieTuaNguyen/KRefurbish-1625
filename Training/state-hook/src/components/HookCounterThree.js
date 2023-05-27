import React, { useState } from 'react'

function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' })

  return (
    <div>
      <form>
        <h1>Enter your first name:</h1>
        <input type="text"
          value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value })} />
        <br />
        <h1>Enter your last name:</h1>
        <input type="text"
          value={name.lastName}
          onChange={e => setName({ ...name, lastName: e.target.value })} />
        <br />
        <h2>Your first name is: {name.firstName} </h2>
        <h2>Your last name is: {name.lastName} </h2>
      </form>
    </div>
  )
}

export default HookCounterThree