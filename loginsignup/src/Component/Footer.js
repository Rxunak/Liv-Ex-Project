import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/Footer.css'

import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='footercontainer'>

                <div className='row1'>

                    <div className='Socials'>
                        <h3>Socials Follow</h3>
                        <a href="https://facebook.com">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href="https://instagram.com">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="https://twitter.com">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        

                        
                       
        
      


                    </div>

                    <div className='col1'>
                        <h3>15 West End Lane UB3 5LT</h3>
                    </div>


                    <div className='col'>
                        <h4>07828378978</h4>
                    </div>



                    <div className='col'>
                        <h4>raunak@liv-ex.com</h4>
                    </div>


                </div>

                <hr />


                <div className='row2'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()}. All Rights Reserved.
                    </p>

                </div>




            </div>

        </div>
    )
}

export default Footer