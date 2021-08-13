import React from 'react';

const Header = (props) => {

    return(
        <div className= "container">
            <nav className="header-container">
            <h1 className="logo"><a href="#">Alvin Rumbaoa</a></h1>
                <ul className="nav-menu">
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