import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';

const ResumeViewer = ( ) =>{
    const history = useHistory();
    const handleClick = () => history.push('/');

    let images = [
        {
            url:"/images/resume.png",
            title:"Resume"
        },
        {
            url:"/images/certificate.png",
            title:"Certificate"
        }
    ]

    const onCloseHandler = () =>{
        <Link to="/" />
    }   
    return(
        <div className="viewer-container">
                <Lightbox image={images} title="My Resume" onClose ={handleClick}/>
        </div>
    )
}

export default ResumeViewer;