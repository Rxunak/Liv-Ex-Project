  import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/Footer.css'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import logo from '../Assets/IT Support.png'

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='footercontainer'>

                <div className='row1'>

                    <div className='Socials'>
                        <h3 className='socialh3'>Socials Follow</h3>
                        <a id='ic' href="https://facebook.com" target='_blank'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a id='ic'  href="https://instagram.com" target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a id='ic'  href="https://twitter.com" target='_blank'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>

                    <div className='col1'>
                        <h3 className='colad'>15, West End Lane UB3 5LT</h3>
                    </div>


                    <div className='col'>
                        <h4 className='cont'>07828378978</h4>
                    </div>



                    <div className='col'>
                        <h4 className='cont'>raunak@liv-ex.com</h4>
                    </div>

                    <div className='logo'>
                    <img className="logo3" src={logo} alt="" />

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