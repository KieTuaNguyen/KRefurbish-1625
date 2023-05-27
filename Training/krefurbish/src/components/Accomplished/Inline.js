import React from 'react'

const heading = {
  fontSize: '72px',
  color: 'blue'
}

function Inline() {
  return (
    <div>
      {/* OK */}
      <h1 className='error'>Error</h1>
      {/* FAIL */}
      {/* <h1 className={styles.success}>Success</h1> */}
      <h1 style={heading}>
        Inline
      </h1>
    </div>
  )
}

export default Inline