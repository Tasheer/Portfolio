import React from 'react';
import Navbar from '../components/navbar';
import About from '../components/about';
import Services from '../components/services';
import Projects from '../components/projects';
import Footer from '../components/footer';
import '../index.css';
import {FiArrowRight} from 'react-icons/fi';
import Button from '../components/button';

const Home = () => {

    return (
        <div className='home'>

            <div id="button-section">
                <Navbar />
            </div>

            <div className='home-central'>
                <p className='hl1'>DIGITAL EXPERINCES FROM PAST COMPANIES</p>
                <p className='hl2'>Yash is a <span></span></p>
                <span className='hl3'> 
                    <FiArrowRight className='arr' /> 
                    <span className='hl3-l'>
                        based in Delhi, India.
                    </span>
                </span>
            </div>

            <div id='projects-section'>
                <Projects />
            </div>
            <div id='services-section'>
                <Services />
            </div>
            <div id="about-section">
                <About />
            </div>

            <Footer />

            <Button />

        </div>
    )
}

export default Home