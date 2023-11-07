import React, { useState } from 'react'
import { Link } from "react-router-dom";
import  '../index.css'
import logo from '../requirements/logos.png'
import Popup from '../components/form';

const Navbar = () => {

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
                window.scrollTo({
                top: aboutSection.offsetTop,
                behavior: 'smooth',
            });
        }
    }

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
                window.scrollTo({
                top: servicesSection.offsetTop,
                behavior: 'smooth',
            });
        }
    }
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
                window.scrollTo({
                top: projectsSection.offsetTop,
                behavior: 'smooth',
            });
        }
    }
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };
    return (
        <div className='nav'>

            <div className="logo">
                <Link to="/" >
                    <img src={logo} alt="" />
                </Link>
            </div>

            <div className="nav-options">

                <div className='op'>

                    <span onClick={scrollToProjects} className='hover-text'>
                        PROJECTS
                    </span>

                    <span onClick={scrollToServices} className='hover-text'>
                        SERVICES
                    </span>

                    <span onClick={scrollToAbout} className='hover-text'>
                        ABOUT
                    </span>

                </div>

            </div>

            <div className='btn'>
                <button className='button' onClick={openPopup}>WORK WITH ME</button>
            </div>

            <Popup isOpen={isPopupOpen} onClose={closePopup} />

        </div>
    )
}

export default Navbar