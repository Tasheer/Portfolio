import React from 'react';
import Navbar from '../components/navbar';
import nft from '../requirements/Nft info.png';
import nft1 from '../requirements/Nft 1.png';
import nft2 from '../requirements/Nft 2.png';
import nft3 from '../requirements/Nft 3.png';
import sozo from '../requirements/S 1.png';
import bitcoin from '../requirements/B 1.png';
import stream from '../requirements/SP 1.png';
import Footer from '../components/footer'
import Info from '../components/info';
import Button from '../components/button';
import Footer2 from '../components/footer2';

const Nft = () => {
    return (
        <div>

            <div id="button-section">
                <Navbar />
            </div>

            <Info 
            
                title="BlockChainGallery | NFT Trading Website" 

                about="BlockChainGallery is a NFT trading site serves as a vibrant marketplace, connecting artists, collectors, and enthusiasts to buy, sell, and trade unique digital assets and artworks secured by blockchain technology."

                role="To design UI/UX of whole website which led end-to-end design process, conceptualizing and creating user-centered interfaces that enhance usability and provide an immersive user experience and created detailed wireframes and interactive prototypes using industry-standard tools, translating conceptual ideas into tangible and testable design solutions."

                timeFrame="Timeframe: 2 weeks"
            />
            
            <div className='img-container'>

                <img src={nft} alt="" className='img'/>
                <img src={nft1} alt="" className='img'/>
                <img src={nft2} alt="" className='img'/>
                <img src={nft3} alt="" className='img'/>

            </div>

            <Footer2 

                image1={sozo}
                name1="Sozo Finance | Decentralized Exchange"
                link1='/sozo-finance'

                image2={bitcoin}
                name2="Saturn | Bitcoin Wallet"
                link2='/bitcoin-Wallet'

                image3={stream}
                name3="Pro Plays | Streaming Platform"
                link3='/streaming-platform'

            />

            <Footer />

            <Button />


        </div>
    )
}

export default Nft