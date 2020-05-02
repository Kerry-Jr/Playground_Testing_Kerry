import React, { Component } from 'react'
import ShoppingItem from '../../components/ShoppingItem'

export default class ShoppingList extends Component {
  state = {
    items: ['apples','oranages','cats','baseball'],
    stuff: ['cars','computers','coding','dogs']
    
  }
  
  render() {
    return (
      
      <div className=' container mt-4 bg-warning text-center'>
        <h1 className='text-danger'>{this.props.title}</h1>
      
        <div className="row">
          <div className="col-6">
          <ShoppingItem items={this.state.items}/>
          </div>
          <div className="col-6">
          <ShoppingItem items={this.state.stuff}/>
      
          </div>
        </div>
        
      
      </div>
    )
  }
}
