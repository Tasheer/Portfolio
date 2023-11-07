import React from 'react';
import pic from '../requirements/dp.png';

const About = () => {

    return (
        <div className="about-container">

            <span>Who am I</span>

            <div>
                <img className='dp' src={pic} alt="" />
            </div>

            <p>
                Hi, with over 2 years of experience as a UI/UX designer, I have honed my skills in creating visually stunning interfaces that deliver exceptional user experiences. My meticulous attention to detail ensures pixel-perfect designs, while my strong problem solving abilities allow me to tackle complex design challenges with ease. Collaborative and proactive, I thrive in fastpaced environments, working closely with cross-functional teams to deliver innovative and user-centric solutions
            </p>

        </div>

    )
}

export default About