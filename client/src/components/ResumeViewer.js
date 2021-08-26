import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useHistory } from 'react-router';

const ResumeViewer = ( ) =>{
    const history = useHistory();
    const handleClick = () => history.push('/alvinrumbaoa.github.io/');
 
    return(
        <div className="viewer-container">
                <Lightbox image="https://i.ibb.co/3zRxc9Y/resume.png" title="My Resume" onClose ={handleClick}/>
        </div>
    )
}

export default ResumeViewer;