import React from 'react'

export default function Cities(props) {
  return (
    <div>
      {props.cities.map(city => (
        <h5>{city}</h5>
      ))}

    </div>
  )
}