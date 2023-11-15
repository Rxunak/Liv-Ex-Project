import { useState } from 'react';
import Model from 'react-modal'

import '../Styles/Contact.css'


const Contact =()=>
{
    const [visible, setvisible]=useState(false)
    return(

        <div className='Contact-container'>


            <button id='cont-butn' onClick={()=>setvisible(true)}>Contact Us</button>
            <Model className={"content"} s isOpen={visible} onRequestClose={()=>setvisible(false)}>
                <h1>Fill in your Details</h1>
                <form className='form' action="">
                    <label  htmlFor=""> 
                        <input className='cinp' type="text" name='name' placeholder='Name' />
                        <br />
                       
                        <input className='cinp' type="email" placeholder='Email' />
                        <br />
                       
                        <input className='cinp' type="text" placeholder='Query'/>
                    </label>
                    <br />
                    <input className='cont-btn' type="submit" value="Submit" />
                </form>
                <button className='btn2' onClick={()=>setvisible(false)}>Close</button>
            </Model>
           
           
        </div>
    
    )
}

export default Contact;