import React, { Component } from 'react'
import Cities from './../../components/ListCities'

export default class ListCities extends Component {
  state = {
    cities: ['Alameda','Oakland','San Jose','San Francisco'],
    photos: []
  }
  
  render() {
    return (
      <div className='mt-4 bg-danger text-center' style={{color: 'whitesmoke', height: '100%'}}>
         <p>These are cities I lived in!!</p>
        <h2 className='bg-info'>{this.state.cities}</h2>
        <img src='https://specials-images.forbesimg.com/imageserve/5daaf195616a450007041f83/960x0.jpg?fit=scale'alt='sunset' style={{height: '100px', width: '200px'}}></img>
       


      </div>
    )
  }
}
