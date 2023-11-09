import React from 'react'
import { ReactDOM } from 'react-dom/client'
import '../Styles/Home.css'





import logo from '../Assets/ITHome.jpg'
function Home (){
  return(
    <div className='home-container'>

<div className='heading'>
        <h1>Welcome to IT Support</h1>
      </div>

      <div className='home-banner'>
        <img className='home-image' src={logo} alt="" />
      </div>

      

     

 

  



      

      
    
    </div>
    

   
  
  )
}

export default Home;
