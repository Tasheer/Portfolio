import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../requirements/dp2.png';
import {AiOutlineArrowLeft} from 'react-icons/ai';

const Info = ({ title, about, role, timeFrame }) => {
    return (
        <div className='info'>
            <Link to='/' className='back' >
                    <span> <AiOutlineArrowLeft style={{fontSize: '1.5rem'}}/> BACK TO PROJECTS </span>
                </Link>

                <h1>
                    {title}
                </h1>

                <p className='p1'>
                    Tools: Figma
                    <br />
                    Skills: UI/UX designer, Prototyping
                </p>

                <div className='pro'>
                    <img src={profile} alt="" className='profile' />
                    <span className='profile-text'>Yash Yadav</span>
                </div>

                <h2>
                    About
                </h2>

                <p className='info-para'> 
                    {about} 
                </p>

                <h2>
                    My Role
                </h2>

                <p className='info-para'>
                    {role}
                </p>

                <span className='time'>
                    {timeFrame}
                </span>
        </div>
    )
}

export default Info