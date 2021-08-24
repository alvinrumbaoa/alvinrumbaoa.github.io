import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Header = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    return(
        <div className= "container">
            <nav className="header-container">
            <h1 className="logo"><a href="#">Alvin Rumbaoa</a></h1>
            <div className="menu-bar">
            <button onClick={handleToggle}> {navbarOpen ? ( <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
            ) : (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
            )}              
            <ul className={navbarOpen? "nav-menu" : "hidebar" }>
                    <li className="list-item"><a href="#">Home</a></li>
                    <li className="list-item"><a href="#">About</a></li>
                    <li className="list-item"><a href="#">Works</a></li>
                    <li className="list-item"><a href="#">Blog</a></li>
                </ul>       
                 
                </button>  
                </div>
                  <ul className="nav-menu2">
                    <li className="list-item"><a href="#">Home</a></li>
                    <li className="list-item"><a href="#">About</a></li>
                    <li className="list-item"><a href="#">Works</a></li>
                    <li className="list-item"><a href="#">Blog</a></li>
                </ul>    
            </nav>
        </div>
    )
}


export default Header;