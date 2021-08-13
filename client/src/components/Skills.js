import React from 'react';
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";

const Skills = (props) => {

    return(
        <div className= "container">
             <div className="skills-section">
        
             <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                <h1> Technologies Used</h1> 
                <div className="skill-card-wrapper">
                        <div className="skill-cards">
                                <h3>Foundation</h3>
                                <div className="icons">
                                    <img src="/images/html5.svg" alt="amazon" width="60" height="60"/>
                                    <img src="/images/css3-2.svg" alt="amazon" width="60" height="60"/>
                                    <img src="/images/jquery.svg" alt="amazon" width="60" height="60"/>
                                    <img src="/images/git.svg" alt="amazon" width="60" height="60"/>
                                    <img src="/images/js.svg" alt="amazon" width="60" height="60"/>
                                    <img src="/images/vscode.svg" alt="amazon" width="60" height="60"/>
                                </div>     
                          
                                    <img className="story-set" src="/images/designer.svg" alt="illustration" width="120" height="120"/>
                           
                        </div>
                        <div className="skill-cards">
                                <h3>Frontend</h3>
                                <div className="icons">
                                    <img src="/images/figma-original.svg" alt="amazon" width="70" height="70"/>
                                    <img src="/images/react.svg" alt="amazon" width="70" height="70"/>
                                    <img src="/images/bootstrap.svg" alt="amazon" width="70" height="70"/>
                                    <img src="/images/axios.svg" alt="amazon" width="70" height="70"/>
                                </div>
                              
                                    <img className="story-set" src="/images/designer2.svg" alt="illustration" width="120" height="120"/>
                                    
                        </div>
                        <div className="skill-cards">
                                <h3>Backend</h3>
                                <div className="icons">
                                    <img src="/images/mongodb.svg" alt="amazon" width="70" height="70"/>
                                    <img src="/images/jest.svg" alt="amazon" width="70" height="70"/>
                                    <img src="/images/nodejs.svg" alt="amazon" width="70" height="70"/>
                                    <img src="/images/express.svg" alt="amazon" width="70" height="70"/>
                                    <img src="/images/socket.svg" alt="amazon" width="70" height="70"/>
                                </div>
                                    <img className="story-set" src="/images/designer3.svg" alt="illustration" width="120" height="120"/>
                             
                        </div>
                        <div className="skill-cards">
                                <h3>Deployment</h3>
                                <div className="icons">
                                    <img src="/images/aws2.svg" alt="amazon" width="70" height="70"/>
                                    <img src="/images/github.svg" alt="amazon" width="70" height="70"/>
                                </div>
                               
                                    <img className="story-set" src="/images/software-engineer.svg" alt="illustration" width="120" height="120"/>
                             
                        </div>
                </div>                    
                </motion.div>
            </div>
        </div>
    )
}


export default Skills;