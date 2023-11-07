import React from 'react';
import Home from './pages/home';
import Nft from './pages/nft';
import Sozo from './pages/sozo';
import Bitcoin from './pages/bitcoin';
import Streaming from './pages/streaming';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

        <Router>


          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/nft-trading-site' element={<Nft />} />
            <Route path='/sozo-finance' element={<Sozo />} />
            <Route path='bitcoin-Wallet' element={<Bitcoin />} />
            <Route path='/streaming-platform' element={<Streaming />} />
          </Routes>

        </Router>

    </div>
  );
}

export default App;
