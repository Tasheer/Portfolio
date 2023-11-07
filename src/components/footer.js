import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {HiPhone} from 'react-icons/hi';
import {BiLogoGmail} from 'react-icons/bi';

const Footer = () => {

    const handlePhoneIconClick = () => {
        window.location.href = 'tel:+91 9166855456';
        };

    return (
        <div className='footer'>
            <a className='footer-i1' href="https://www.linkedin.com/in/yash-yadav-99b876224/"><BsLinkedin /></a>
            <a className='footer-i2' href="mailto:yadavyash337@gmail.com"><BiLogoGmail /></a>
            <button className='footer-i3' onClick={handlePhoneIconClick}><HiPhone /></button>
        </div>
    )
}

export default Footer