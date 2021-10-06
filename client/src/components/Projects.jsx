import React from 'react';

const Projects = (props) => {

    return(
        <div className= "container">
            <div className="parallax"></div>
            <div className="project-container">
            <h1>My Recent Works</h1>
                <div className="project-wrapper">
                <div className="projects-card">
                    <h2>TheRumbaoas</h2>
                        <a href="http://therumbaoas.com/"><img className="demo" src="images/photography-demo.gif" alt="project" width="400" height="250"/></a>
                </div>
                <div className="projects-card">
                    <h2>D2W Logistics</h2>
                        <a href="https://github.com/rstclair26/d2w-logistics" ><img className="demo" src="images/d2w-demo.gif" alt="project" width="400" height="250"/></a>
                </div>
                <div className="projects-card">
                     <h2>ALYH Inventory</h2>
                        <img className="demo" src="images/settings.svg" alt="project" width="400" height="250"/>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Projects;