import React from 'react';

const Projects = (props) => {

    return(
        <div className= "container">
            <div className="project-container">
            <h1>Recent Projects</h1>
                <div className="project-wrapper">
        
                <div className="projects-card">
                    <h2>TheRumbaoas</h2>
                        <a href="" ><img className="demo" src="images/photography-demo.gif" alt="project" width="500" height="350"/></a>
                </div>
                <div className="projects-card">
                    <h2>D2W Logistics</h2>
                        <a href="" ><img className="demo" src="images/d2w-demo.gif" alt="project" width="500" height="350"/></a>
                </div>
                </div>
                
            </div>
            <div className="parallax">
            </div>  
        </div>
    )
}


export default Projects;