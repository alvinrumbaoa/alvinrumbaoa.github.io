import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import {navigate} from '@reach/router';

const ResumeViewer = ( ) =>{


    let images = [
        {
            url:"documents/resume.png",
            title:"Resume"
        },
        {
            url:"documents/certificate.png",
            title:"Certificate"
        }
    ]

    const onCloseHandler = () =>{
        navigate("/");
    }   
    return(
        <div className="viewer-container">
                <Lightbox image={images} title="My Resume" onClose ={onCloseHandler}/>

        </div>
    )
}

export default ResumeViewer;