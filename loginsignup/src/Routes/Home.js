import React from 'react'
import '../Styles/Home.css'
import Navbar from '../Component/Navbar'

import logo from '../Assets/ITHome.jpg'

const Home = () => {
  return (
    <div>
      <div>    <Navbar/></div>

      <div >
        <h1 id='homehead'>Welcome to <br />
        Help Desk Suppport</h1>
      </div>

      <div className='infoo'>
        <p id='info'>Hey we are here <br />
         for your support hjsbhsdbhsdcbsd <br />
         cshd csdc sdc sdc sdc sdjc sdc sjcsdjc</p>
      </div>

      <div >
      <img className="HomeLogo" src={logo} alt="" />
      </div>

    </div>
 


    
  )
}

export default Home
