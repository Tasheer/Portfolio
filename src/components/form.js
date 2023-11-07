import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'

function Popup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="form-container">
            <div className="form-popup">
                <div className='form-head'>
                    <h2>Enter your details</h2>
                    <AiOutlineClose onClick={onClose} className='cross'/>
                </div>
            <form>
                <input type="text" placeholder="Name" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <input type="tel" placeholder='Phone no.' />
                <br />
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Popup;
