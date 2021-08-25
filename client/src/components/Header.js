import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from "@reach/router";

const Header = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    return(
        <div className= "container">
            <nav className="header-container">
            <h1 className="logo"><a href="/home">Alvin Rumbaoa</a></h1>
            <div className="menu-bar">
            <button onClick={handleToggle}> {navbarOpen ? ( <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
            ) : (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
            )}     
            </button>           
            <ul className={navbarOpen? "nav-menu" : "hidebar" }>
                    <li className="list-item"><a href="/home">Home</a></li>
                    <li className="list-item"><a href="/about">About</a></li>
                    <li className="list-item"><a href="/projects">Works</a></li>
                    <li className="list-item"><a href="/blog">Blog</a></li>
            </ul>       
                
                </div>
                <ul className="nav-menu2">
                    <li className="list-item"><a href="/home">Home</a></li>
                    <li className="list-item"><Link to="/about">About</Link></li>
                    <li className="list-item"><a href="/projects">Works</a></li>
                    <li className="list-item"><a href="/blog">Blog</a></li>
                </ul>    
            </nav>
        </div>
    )
}


export default Header;