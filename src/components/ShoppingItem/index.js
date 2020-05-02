import React from 'react'

export default function ShoppingItem(props) {
  return (
    <div>
      {props.items.map(item => (
        <h5>{item}</h5>
      ))}
      
    </div>
  )
}
