import React from 'react'

const Button = () => {
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
        <div className='btn-comp'>
            <button className='btn-btp' onClick={scrollToTop}>
                Back To Top
            </button>
        </div>
    )
}

export default Button