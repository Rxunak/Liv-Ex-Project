
import '../Styles/About.css'

import logo from '../Assets/About.jpg'

function About (){
    return(

        <div className="About-container">
            
        <div className="about-heading">
            <h1 >About Us</h1>
        </div>

        <div className='abt-img-cont'>
            <img className='About-image' src={logo} alt="" />
            <div className='About-text'>
            <h1 className='about-head'>What we do:</h1>
            <p>At RB, we are your dedicated partner in IT support, offering unparalleled expertise to ensure seamless technology experiences.</p> <br />
            <p>With a team of skilled professionals, we thrive on resolving complex issues, optimizing systems, and safeguarding your digital infrastructure.</p> <br />
            <p>Our commitment to excellence is driven by a passion for innovation and a relentless pursuit of client satisfaction.</p> <br />
            <p>Trust us to keep your business running smoothly in the ever-evolving digital landscape.</p>
            </div>

        </div>



        </div>
       
     
    )
}

export default About;

