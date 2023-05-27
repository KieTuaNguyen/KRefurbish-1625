import React, { useState } from 'react'

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount)

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      Count: {count}
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button> {/* This is the Reset button */}
        <button onClick={() => setCount(count + 1)}>Increment</button> {/* This is the Increment button */}
        <button onClick={() => setCount(count - 1)}>Decrement</button> {/* This is the Decrement button */}
        <button onClick={incrementFive}>Increment 5</button> {/* This is the Increment 5 button */}
      </div>
    </div>
  )
}

export default HookCounterTwo