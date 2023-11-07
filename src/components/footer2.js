import React from 'react'
import { Link } from 'react-router-dom'

const Footer2 = ({ image1, image2, image3, name1, name2, name3, link1, link2, link3 }) => {
    const scrollToTop = () => {
        const buttonSection = document.getElementById('button-section');
        if (buttonSection) {
                window.scrollTo({
                top: buttonSection.offsetTop,
                behavior: 'smooth',
            });
        }
    }
    return (

        <div>
            <div className='footer-head'>Other Projects</div>
            <div className="footer-main-container">
                <div className='footer-container'>
                    <div>
                            <Link to={`${link1}`} style={{ textDecoration:'none', color:'white' }} onClick={scrollToTop}>
                            <img src={image1} alt="" className='fimg' />
                            <br />
                            <br />
                            <span>{name1}</span>
                            </Link>
                    </div>
                    <div>
                        <Link to={`${link2}`} style={{ textDecoration:'none', color:'white' }} onClick={scrollToTop}>
                            <img src={image2} alt="" className='fimg' />
                            <br />
                            <br />
                            <span>{name2}</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={`${link3}`} style={{ textDecoration:'none', color:'white' }} onClick={scrollToTop}>
                            <img src={image3} alt="" className='fimg' />
                            <br />
                            <br />
                            <span>{name3}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2