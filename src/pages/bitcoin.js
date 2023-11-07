import React from 'react'
import Navbar from '../components/navbar'
import Button from '../components/button'
import Info from '../components/info'
import BInfo from '../requirements/B info.png'
import B1 from '../requirements/B 1.png'
import B2 from '../requirements/B 2.png'
import B3 from '../requirements/B 3.png'
import B4 from '../requirements/B 4.png'
import B5 from '../requirements/B 5.png'
import nft from '../requirements/Nft 1.png';
import sozo from '../requirements/S 1.png';
import stream from '../requirements/SP 1.png';
import Footer from '../components/footer'
import Footer2 from '../components/footer2'

const Bitcoin = () => {
    return (
        <div>

            <div id="button-section">
                <Navbar />
            </div>

            <Info 
            
            title="Saturn Bitcoin Wallet"

            about="In this UI/UX project, I designed a comprehensive Bitcoin wallet, combining functionality, security, and an intuitive user experience. With a user-centered approach, I created an interface that simplifies Bitcoin transactions, enhances asset management, and empowers users in the world of digital finance. This case study showcases the meticulous design process, thoughtful decision-making. and the ultimate goal of delivering a seamless and secure Bitcoin wallet experience."

            role="As the UI/UX designer, I led the design efforts for the complete user interface and experience of the Bitcoin wallet project. I focused on creating an intuitive and secure wallet interface, incorporating user feedback to ensure a seamless and user-friendly experience for managing Bitcoin transactions and digital assets."
            
            timeFrame="Timeframe: 3 weeks"

            />

            <div className="img-container-2">

                <img src={BInfo} alt="" className="img"/>
                <img src={B1} alt="" className="img" id='bit-1'/>
                <img src={B2} alt="" className="img" id='bit-2'/>
                <img src={B3} alt="" className="img" id='bit-3'/>
                <img src={B4} alt="" className="img" id='bit-4'/>
                <img src={B5} alt="" className="img" id='bit-5'/>

            </div>

            <Footer2 

                image1={nft}
                name1="NFT Trading Site"
                link1='/nft-trading-site'

                image2={sozo}
                name2="Sozo Finance | Decentralized Exchange"
                link2='/sozo-finance'

                image3={stream}
                name3="Pro Plays | Streaming Platform"
                link3='/streaming-platform'

            />

            <Footer />

            <Button />

        </div>
    )
}

export default Bitcoin