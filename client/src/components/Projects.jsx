import React from 'react';

const Projects = (props) => {

    return(
        <div className= "container">
            <div className="parallax">
                
            </div>
            <div className="project-container">
            <h1>My Recent Works</h1>
                <div className="project-wrapper">
        
                <div className="projects-card">
                    <h2>TheRumbaoas</h2>
                        <a href="https://therumbaoas.netlify.app/"><img className="demo" src="images/photography-demo.gif" alt="project" width="50" height="350"/></a>
                </div>
                <div className="projects-card">
                    <h2>D2W Logistics</h2>
                        <a href="xenodochy23.github.io/d2w-logistics" ><img className="demo" src="images/d2w-demo.gif" alt="project" width="500" height="350"/></a>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Projects;