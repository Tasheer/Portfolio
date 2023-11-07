import React from 'react';
import Navbar from '../components/navbar';
import Info from '../components/info';
import Sp1 from '../requirements/SP 1.png';
import Sp2 from '../requirements/SP 2.png';
import Sp3 from '../requirements/SP 3.png';
import Sp  from '../requirements/SP info.png';
import nft from '../requirements/Nft 1.png';
import sozo from '../requirements/S 1.png';
import bitcoin from '../requirements/B 1.png';
import Footer from '../components/footer';
import Button from '../components/button';
import Footer2 from '../components/footer2';

const Streaming = () => {
  return (
    <div>

      <div id="button-section">
          <Navbar />
      </div>

      <Info 

        title="ProPlays | Streaming Platfrom"

        about="Introducing ProPlays, the ultimate destination for limitless entertainment. Immerse yourself in a world of captivating movies, addictive series, and exclusive live events, all tailored to satisfy your streaming cravings."

        role="As the UI/UX designer, I took the lead in conceptualizing and designing the entire streaming platform from scratch. I conducted extensive research to understand user preferences and behavior, which informed the development of intuitive and user-friendly interface designs. I created wireframes, prototypes, and mockups, ensuring a seamless and visually appealing user experience. Additionally. I collaborated closely with the development team to implement the designs and conducted usability testing to gather valuable feedback for iterative improvements. Overall, my role encompassed the end-to-end design process, delivering an immersive and engaging streaming platform."

        timeFrame="Timeframe: 1 week"

      />

      <div className='img-container'>

        <img src={Sp} alt="" className='img'/>
        <img src={Sp1} alt="" className='img'/>
        <img src={Sp2} alt="" className='img'/>
        <img src={Sp3} alt="" className='img'/>

      </div>

      <Footer2 

        image1={nft}
        name1="NFT Trading Site"
        link1='/nft-trading-site'

        image2={sozo}
        name2="Sozo Finance | Decentralized Exchange"
        link2='/sozo-finance'

        image3={bitcoin}
        name3="Saturn | Bitcoin Wallet"
        link3='/bitcoin-Wallet'

      />

      <Footer />

      <Button />

    </div>
  )
}

export default Streaming