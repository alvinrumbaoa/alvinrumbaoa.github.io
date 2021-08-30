import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useHistory } from 'react-router';

const ResumeViewer = ( ) =>{
    const history = useHistory();
    const handleClick = () => history.push('/alvinrumbaoa.github.io/');
 
    return(
        <div className="viewer-container">
                <Lightbox className="resume-image" image="https://i.ibb.co/px0rS8X/alvin-resume.jpg" title="My Resume" onClose ={handleClick}/>
        </div>
    )
}

export default ResumeViewer;