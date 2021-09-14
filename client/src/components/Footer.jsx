import React from 'react';
import axios from 'axios';
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const Footer = () =>{

    // const [errors, setErrors] = useState([]);
    // const [name, setName]  = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [message,setMessage] = useState("");

    // const onSubmitHandler =  (e) =>{
    //     e.preventDefault();
    //     axios.post("http://localhost:8000/api/customers", {
    //         name: name,
    //         email: email,
    //         phone: phone,
    //         message: message,
    //     })
    //     .then((res) =>{
    //         console.log(res.data.errors);
    //         if(res.data.errors){
    //             setErrors(res.data.errors);
            
    //         } else{
    //             navigate("/submitted");
    //         }        
    //     })
    //     .catch(err => { 
    //         console.log(err.response);
    //         setErrors(err.response.data.errors);
    //     })      
    // }

    return (
        <div className="container">
            <div className="footer">          
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                <div className="parallax2"> </div>
                <div className="contact-us-container">
                    <h1 className="big-text">Freelance Work or Hire me for Employment</h1>
                                <h2>Ready and Open for any ideas for your next Project</h2>
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.90 }} >
                                        <a href="https://calendly.com/alvinrumbaoa/30min">
                                            <img src="images/add-video.png" alt="" height="200" width="200"/>
                                            <h2>Schedule with me</h2>
                                        </a>
                                </motion.div>
                    <div className="social-media">
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.90 }} >
                                        <a href="https://www.facebook.com/xenofy/">
                                            <img src="images/facebook.png" alt="" height="90" width="90"/>
                                        </a>
                                </motion.div>
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.90 }} >
                                <a href="https://github.com/xenodochy23">
                                <img src="images/github (2).png" alt="" height="90" width="90"/>
                                </a>
                                </motion.div>                            
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.90 }} >
                                        <a href="https://www.instagram.com/iamachipmunks/">
                                            <img src="images/instagram.png" alt="" height="90" width="90"/>
                                        </a>
                                </motion.div>
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.90 }} >
                                    <a href="https://www.twitter.com">
                                            <img src="images/twitter (1).png" alt="" height="90" width="90"/>
                                    </a>
                                </motion.div>
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.90 }} >
                                    <a href="https://www.twitter.com">
                                            <img src="images/linkedin (2).png" alt="" height="90" width="90"/>
                                    </a>
                                </motion.div>
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.90 }} >
                                    <a href="mailto:alvinrumbaoa@gmail.com">
                                            <img src="images/iphone-messages-app.png" alt="" height="90" width="90"/>
                                    </a>
                                </motion.div>
                    </div>   

                    </div> 
            </motion.div>     
            </div>
        </div>
    )
}

export default Footer;