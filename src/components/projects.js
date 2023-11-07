import React from 'react';
import { Link } from 'react-router-dom';
import nftMain from '../requirements/Nft 1.png';
import bitcoinMain from '../requirements/B 1.png';
import sozoMain from '../requirements/S 1.png';
import stremMain from '../requirements/SP 1.png';

const Projects = () => {
    return (

        <div className="project-container">
            
            <div className="project-item">
                <Link to='/nft-trading-site' style={{ textDecoration:'none', color:'white' }}> 
                    <img src={nftMain} alt="" className='image' />
                    <span>NFT Trading Site</span>
                </Link>
            </div>

            <div className="project-item">
                <Link to='/bitcoin-Wallet' style={{ textDecoration:'none', color:'white' }}>
                    <img src={bitcoinMain} alt="" className='image' />
                    <span>Saturn | Bitcoin Wallet</span>
                </Link>
            </div>

            <div className="project-item">
                <Link to='/sozo-finance' style={{ textDecoration:'none', color:'white' }}>
                    <img src={sozoMain} alt="" className='image' />
                    <span>Sozo Finance | Decentralized Exchange</span>
                </Link>
            </div>

            <div className="project-item">
                <Link to='/streaming-platform' style={{ textDecoration:'none', color:'white' }}>
                    <img src={stremMain} alt="" className='image' />
                    <span>Pro Plays | Streaming Platform</span>
                </Link>
            </div>

</div>

    )
}

export default Projects