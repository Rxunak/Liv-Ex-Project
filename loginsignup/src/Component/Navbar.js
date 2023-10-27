import '../Styles/NavbarStyles.css'
import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import { Link } from 'react-router-dom'

import logo from '../Assets/IT Support.png'

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <img className="logo2" src={logo} alt="" />
  
                <ul className="nav-menu">
                    {MenuItems.map((item, index) =>{
                        return(
                        
                        <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                        )
                    
                    })}

                    <button className='navbarbutton'>Sign Up</button>
                    

                </ul>
            </nav>
        )
    }

} 

export default Navbar;