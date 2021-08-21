import React from 'react';
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";

const Skills = (props) => {

    return(
        <div className= "container">
            <div className="skills-section">
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                    <h1>My Skills</h1> 
                <div className="skill-card-wrapper">     
                        <div className="skill-cards">
                                <div className="icons">
                                    <img src="images/html5.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/css3-2.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/jquery.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/git.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/js.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/vscode.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/figma-original.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/react.svg" alt="amazon" width="80" height="80"/>                                       
                                    <img src="images/jest.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/socket.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/axios.svg" alt="amazon" width="80" height="80"/>     
                                    <img src="images/mongodb.svg" alt="amazon" width="80" height="80"/>                                
                                    <img src="images/nodejs.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/express.svg" alt="amazon" width="80" height="80"/>                                  
                                    <img src="images/aws2.svg" alt="amazon" width="80" height="80"/>
                                    <img src="images/github.svg" alt="amazon" width="80" height="80"/>
                                    </div>
                     </div>
                  </div>
                </motion.div>
            </div>
        </div>
    )
}


export default Skills;