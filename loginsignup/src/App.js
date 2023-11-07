
import './App.css';
import SignUp from './Routes/SignUp';

import { Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Footer from './Component/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from 'react'


function App() {
  return (

    <div className='page-container'>
    <div  className='content-wrap'>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          
         </Routes>
         
    </div>
    <Footer/>
    </div>
  );
}

export default App;
