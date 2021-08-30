import React from 'react';
// import img from './Logo/portfolio2.png';
import { FaAlignJustify } from "react-icons/fa";
const NavBar = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-">
                        {/* <img className="portfolio" src={img} alt="" height="100" width="100" /> */}
                            <h1>Portfolio</h1>

                        </div>
                    </ul>
                    {state ? (
                        <ul className="navbar__right">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>) : ("")}


                    <div className="toggle" onClick={() => setState(!state)}><FaAlignJustify /></div>
                </div>

            </div>

        </nav>
    )
}
export default NavBar;
