import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';

const ResumeViewer = ( ) =>{
    const history = useHistory();
    const handleClick = () => history.push('/alvinrumbaoa.github.io/');

    const images = [
        {
            url:"./client/public/images/resume.png",
            title:"Resume"
        },
        {
            url:"./client/public/images/certificate.png",
            title:"Certificate"
        }
    ]
 
    return(
        <div className="viewer-container">
                <Lightbox image={images} title="My Resume" onClose ={handleClick}/>
        </div>
    )
}

export default ResumeViewer;