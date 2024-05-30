import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import img from "../../assets/png-transparent-netflix-logo-netflix-television-show-streaming-media-film-netflix-logo-television-text-trademark-thumbnail-removebg-preview.png"
import "./nav.css";
//import '../../../node_modules/bootstrap/dist/css/bootstrap.css.map'
function Nav() {
    const [show, handleShow] = useState(false);




    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
 

    return (
        <div className={`nav ${show && "nav__black"}`}>
           <Link to='/'><img
                className="nav__logo"
                src={img}
                alt="Netflix Logo"
            /></Link> 
            <img 
                className="nav__avatar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Avatar logo"
            />
          {/* <button className="nav__avatar joinbtn" > <Link className="links_to" to='/second'>JOIN KNOW</Link></button>
             */}
        </div>
    );
}

export default Nav;