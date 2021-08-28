import React, { useState} from 'react';
import axios from 'axios';
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
import {navigate} from '@reach/router'

const Footer = () =>{

    const [errors, setErrors] = useState([]);
    const [name, setName]  = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message,setMessage] = useState("");

    const onSubmitHandler =  (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/customers", {
            name: name,
            email: email,
            phone: phone,
            message: message,
        })
        .then((res) =>{
            console.log(res.data.errors);
            if(res.data.errors){
                setErrors(res.data.errors);
            
            } else{
                navigate("/submitted");
            }        
        })
        .catch(err => { 
            console.log(err.response);
            setErrors(err.response.data.errors);
        })      
    }


    return (
        <div className="container">
            <div className="footer">          
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>

                <div className="contact-us-container">
                    <h1 className="big-text">Hire Us</h1>
                    <div className="contact-us-wrapper">
                    <div className="contact-us-left">
                        <img src="images/011.png" alt="bike-illustrator" width="400" height="500"/>
                    </div> 

                    <div className="contact-us-right">
                    <form onSubmit={onSubmitHandler}>
                        <div className="textbox-bg">
                            <p>Name:</p> <input className={errors.name? "error-red": null} type="text" name="name"  onChange={(e) => setName(e.target.value)}/>
                        </div>
                        {
                            errors.name ?
                                <span className="error-text">{errors.name.message}</span>
                                : null
                            }
                        <div className="textbox-bg">
                        <p>Email:</p>  <input className={errors.email? "error-red": null}type="text" name="email"  onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        {
                            errors.email ?
                                <span className="error-text">{errors.email.message}</span>
                                : null
                        }
                        <div className="textbox-bg">
                        <p>Phone:</p> <input className={errors.phone? "error-red": null} type="text" name="phone" onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                            {
                            errors.phone ?
                                <span className="error-text">{errors.phone.message}</span>
                                : null
                            }
                        <div className="textbox-bg">
                        <p>Message:</p> <textarea className={errors.message? "error-red": null} type="textarea" name="message"  onChange={(e) => setMessage(e.target.value)}/>
                        </div>
                        {
                            errors.message ?
                                <span className="error-text">{errors.message.message}</span>
                                : null
                            }
                        <br/>
                        <input className="submit-btn" type="submit" value="Hire Me"/>
                    </form>    
                    </div>
                    </div>  
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
                    </div>        
                    </div> 
            </motion.div>     
            </div>
        </div>
    )
}

export default Footer;