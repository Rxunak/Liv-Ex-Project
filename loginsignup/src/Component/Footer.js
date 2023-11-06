import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='footercontainer'>

                <div className='row1'>

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