import React from 'react';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Projects from './Projects';  
import Footer from './Footer'
import {Link} from 'react-router-dom';
import About from './About';

const Homepage = () => {

    return(
        <div className= "container">
            <div className ="homepage-container">
                    <div className ="homepage">
                        <h1 className="main-text">Hello! I'm <span className="my-name">Alvin Rumbaoa</span></h1>
                        <h2>Freelance Web Designer and Full Stack Web Developer based on Orange County, California</h2>
                        <Link to="/alvinrumbaoa.github.io/image">
                            <button className="lightbox-btn">
                                    Check out my CV
                            </button>
                        </Link>
                    </div>   
                    <div className ="homepage-image">
                                <img  src="images/alvin-bg (1).png" alt="avatar"/>
                    </div>
            </div>         
            <Skills/>
            <Testimonials/>
            <About/>
            <div className="parallax"></div>
            <Projects/>
            <Footer/>

        </div>
    )
}


export default Homepage;