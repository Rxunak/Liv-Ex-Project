import { useState } from 'react';
import Model from 'react-modal'

import '../Styles/Contact.css'


const Contact =()=>
{
    const [visible, setvisible]=useState(false)
    return(

        <div className='Contact-container'>


            <button id='cont-butn' onClick={()=>setvisible(true)}>Contact Us</button>
            <Model className={"hamsa"} s isOpen={visible} onRequestClose={()=>setvisible(false)}>
                <h1>Fill in your Details</h1>
                <form action="">
                    <label htmlFor="">
                        Name:
                        <input type="text" name='name' />
                        <br />
                        Email:
                        <input type="email"  />
                        <br />
                        Query:
                        <input type="text" />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <button className='btn2' onClick={()=>setvisible(false)}>Close</button>
            </Model>
           
           
        </div>
    
    )
}

export default Contact;