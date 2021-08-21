import React from 'react';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Projects from './Projects';  
import Footer from './Footer'
import {Link} from '@reach/router';

const Homepage = (props) => {

    return(
        <div className= "container">
            <div className ="homepage-container">
                    <div className ="homepage">
                        <h1 className="main-text">Hello! I'm <span className="my-name">Alvin Rumbaoa</span></h1>
                        <h2>Freelance Web Designer and Full Stack Web Developer based on Orange County, California</h2>
                        <p></p>
                        <button className="cv-btn">Check out my CV!</button>
                    </div>   
                    <div className ="homepage-image">
                                <img  src="images/alvin-bg (1).png" alt="avatar"/>
                    </div>
            </div>          
            <Skills/>
            <Testimonials/>
            <Projects/>
            <Footer/>
        </div>
    )
}


export default Homepage;