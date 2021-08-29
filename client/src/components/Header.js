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
            
            <div> <h1 className="logo"><a href="/alvinrumbaoa.github.io/">Alvin Rumbaoa</a></h1></div>
            <div className="menu-bar">
            <button className="hamburger" onClick={handleToggle}> {navbarOpen ? ( <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
            ) : (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
            )}     
            </button>           
            </div>
            <ul className={navbarOpen? "nav-menu" : "hidebar" }>
                    <li className="list-item"><Link to="/alvinrumbaoa.github.io/">Home</Link></li>
                    <li className="list-item"><Link to="/alvinrumbaoa.github.io/about">About</Link></li>
                    <li className="list-item"><Link to="/alvinrumbaoa.github.io/projects">Works</Link></li>
                    <li className="list-item"><Link to="/alvinrumbaoa.github.io/blog">Blog</Link></li>
            </ul>         
                <ul className="nav-menu2">
                <li className="list-item"><Link to="/alvinrumbaoa.github.io/">Home</Link></li>
                    <li className="list-item"><Link to="/alvinrumbaoa.github.io/about">About</Link></li>
                    <li className="list-item"><Link to="/alvinrumbaoa.github.io/projects">Works</Link></li>
                    <li className="list-item"><Link to="/alvinrumbaoa.github.io/blog">Blog</Link></li>
                </ul>    
            </nav>
        </div>
    )
}


export default Header;