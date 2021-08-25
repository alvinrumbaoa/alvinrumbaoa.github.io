import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import {navigate} from '@reach/router';

const ResumeViewer = ( ) =>{


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
      navigate("/home")
    }   
    return(
        <div className="viewer-container">
                <Lightbox image={images} title="My Resume" onClose ={onCloseHandler}/>

        </div>
    )
}

export default ResumeViewer;