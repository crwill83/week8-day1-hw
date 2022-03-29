import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import About from './views/About'
import Home from './views/Home'


export default class App extends Component {


  constructor() {
    super();
    this.state = {
      name: 'Christopher'
    }
  };



  render() {
    return (
      <div>
        <Navbar  userName = {this.state.name}/>
        <h1>Hi I am Chris my age is number</h1>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Card />
        <Carousel />
      </div>
    )
  }
};