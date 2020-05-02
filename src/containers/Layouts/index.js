import React, { Component } from 'react'
import Tictac1 from './Tictac1'
import Tictac2 from './Tictac2'
import Tictac3 from './Tictac3'
import Tictac4 from './Tictac4'
import Tictac5 from './Tictac5'
import Tictac6 from './Tictac6'
import Tictac7 from './Tictac7'
import Tictac8 from './Tictac8'
import Tictac9 from './Tictac9'
import './style.css';
export default class Layouts extends Component {
  render() {
    return (
      <div className='container-fluid bg-dark'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <Tictac1 />
           
          </div>
          <div className='col-4'>
            <Tictac4 />
                  
          </div>
          <div className='col-4'>
            <Tictac7 />
            
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col-4'>
        
            <Tictac3 />
          </div>
          <div className='col-4'>
      
            <Tictac6 />
          </div>
          <div className='col-4'>
            
            <Tictac9 />
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col-4'>
      
            <Tictac2 />
           
          </div>
          <div className='col-4'>
          
            <Tictac5 />
           
          </div>
          <div className='col-4'>
          
            <Tictac8 />
        
          </div>
        </div>
     
 
     
     
      </div>
    )
  }
}
//Consolas, 'Courier New', monospace