
import './App.css';
import SignUp from './Routes/SignUp';
import Navbar from './Component/Navbar'
import { Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Random from './Routes/Random';
import React from 'react'


function App() {
  return (
    <div >
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/random" element={<Random/>}/>
         </Routes>
    </div>
  );
}

export default App;
