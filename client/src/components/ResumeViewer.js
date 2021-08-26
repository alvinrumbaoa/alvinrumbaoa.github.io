import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router';

const ResumeViewer = ( ) =>{
    const history = useHistory();
    const handleClick = () => history.push('/');

    let images = [
        {
            url:".../public/images/resume.png",
            title:"Resume"
        },
        {
            url:".../public/images/certificate.png",
            title:"Certificate"
        }
    ]

    const onCloseHandler = () =>{
        <Redirect to="/alvinrumbaoa.github.io/"/>
    }   
    return(
        <div className="viewer-container">
                <Lightbox image={images} title="My Resume" onClose ={onCloseHandler}/>
        </div>
    )
}

export default ResumeViewer;