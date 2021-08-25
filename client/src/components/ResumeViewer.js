import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import {navigate} from '@reach/router';

const ResumeViewer = ( ) =>{


    let images = [
        {
            url:"image/resume.png",
            title:"Resume"
        },
        {
            url:"image/certificate.png",
            title:"Certificate"
        }
    ]

    const onCloseHandler = () =>{
      return <a href="https://xenodochy23.github.io/alvinrumbaoa.github.io/#/"/>;
    }   
    return(
        <div className="viewer-container">
                <Lightbox image={images} title="My Resume" onClose ={onCloseHandler}/>

        </div>
    )
}

export default ResumeViewer;