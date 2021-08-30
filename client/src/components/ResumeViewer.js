import React from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useHistory } from 'react-router';

const ResumeViewer = ( ) =>{
    const history = useHistory();
    const handleClick = () => history.push('/alvinrumbaoa.github.io/');
 
    return(
        <div className="viewer-container">
                <Lightbox className="resume-image" image="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/240738337_4928815487128819_2859854230632875106_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=6_ZM-GMUTNMAX-cenb4&_nc_ht=scontent-lax3-2.xx&oh=0354e5734e9c1d54a4b577704a1fd4f4&oe=615068A8" title="My Resume" onClose ={handleClick}/>
        </div>
    )
}

export default ResumeViewer;