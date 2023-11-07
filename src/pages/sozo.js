import React from 'react';
import Navbar from '../components/navbar';
import Info from '../components/info';
import SozoInfo from '../requirements/S info.png';
import Sozo1 from '../requirements/S 1.png';
import Sozo2 from '../requirements/S 2.png';
import Sozo3 from '../requirements/S 3.png';
import Sozo4 from '../requirements/S 4.png';
import Sozo5 from '../requirements/S 5.png';
import nft from '../requirements/Nft 1.png';
import bitcoin from '../requirements/B 1.png';
import stream from '../requirements/SP 1.png';
import Footer from '../components/footer';
import Button from '../components/button';
import Footer2 from '../components/footer2';

const Sozo = () => {
    return (
        <div>

            <div id="button-section">
                <Navbar />
            </div>

            <Info 
            
                title="Sozo Finance | Decentralized Exchange Platform"

                about="A Crosschain decentralized exchange that matches user orders against one another or fills requests from professional market makers in a secure enclave, minimising toxic on-chain MEV and ensuring better prices."

                role="As the UI/UX designer, I played a pivotal role in designing the entire user interface and experience for the decentralized exchange platform, focusing on creating a seamless and secure trading environment while ensuring a user-friendly interface that simplifies the complex processes of cryptocurrency trading."
            
                timeFrame="Timeframe: 3 weeks"
            />

            <div className="img-container">
                <img src={SozoInfo} alt="" className="img" />
                <img src={Sozo1} alt="" className="img" />
                <img src={Sozo2} alt="" className="img" />
                <img src={Sozo3} alt="" className="img" />
                <img src={Sozo4} alt="" className="img" />
                <img src={Sozo5} alt="" className="img" />
            </div>

            <Footer2 

                image1={nft}
                name1="NFT Trading Site"
                link1='/nft-trading-site'
                
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

export default Sozo