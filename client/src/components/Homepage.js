import React from 'react';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Projects from './Projects';  
import Footer from './Footer'

const Homepage = (props) => {

    return(
        <div className= "container">
            <div className ="homepage-container">
                    <div className ="homepage">
                        <h1 className="main-text">Hello, My Name is  <span className="my-name">Alvin Rumbaoa</span></h1>
                        <h2>Full Stack Web Developer</h2>
                        <p> (Frontend + Backend)  offering a strong foundation in software engineering and programming principles,  Responsive Web Applications </p>
                        <button className="cv-btn">Check out my CV!</button>
                    </div>   
                    <div className ="homepage-image">
                                <img src="/images/avataaars.svg" alt="avatar"/>
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