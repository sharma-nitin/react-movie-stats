import React from 'react'
import spinner from './Spinner.svg'

function Spinner() {

  const style ={
      width: '200px',
      margin: 'auto',
      display: 'block'
  }
  return (
    <div data-test = 'spinner'>
      <img data-test = 'image'
        src={spinner}
        style={style}
        alt="Loading..."
      />
    </div>
  )
}

export default Spinner
