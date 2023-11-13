import React from 'react'
import { ReactDOM } from 'react-dom/client'
import '../Styles/Home.css'

import logo from '../Assets/ITHome.jpg'

function Home() {
  return (
    <div className='home-container'>

      <img className='home-image' src={logo} alt="" />
      <div className='overlay'>
        <p className='home-text'>Welcome to IT SUPPORT</p>

      </div>

      

     




    </div>




  )
}

export default Home;
