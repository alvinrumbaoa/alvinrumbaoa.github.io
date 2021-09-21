import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useHistory } from 'react-router';

const ResumeViewer = ( ) =>{
    const history = useHistory();
    const handleClick = () => history.push('/alvinrumbaoa.github.io/');
 
    return(
        <div className="viewer-container">
                <Lightbox className="resume-image" image="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/242526582_4998109536866080_2128213995673899664_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=7HkmHOBJtxQAX_YVtzD&_nc_ht=scontent-lax3-2.xx&oh=a35cc4daf26c1255e1cdbba1aabe4beb&oe=6170A966" title="My Resume" onClose ={handleClick}/>
        </div>
    )
}

export default ResumeViewer;