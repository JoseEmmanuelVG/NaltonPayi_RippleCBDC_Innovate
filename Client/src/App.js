import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletContext from './WalletContext';
import Browser from './wallet_browser_gpt';
import SelectWallet from './wallet_multichain_selector';
import Details from './page_details_wallets';
import ImageGenerator from './page_saved_images';

const App = () => {
  const [selectedWallet, setSelectedWallet] = React.useState('');

  return (
    <WalletContext.Provider value={{ selectedWallet, setSelectedWallet }}>
      <Router>
        <SelectWallet /> {/* This is always shown */}
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/memories" element={<ImageGenerator />} />
          <Route path="/transactions" element={<Browser />} />
          <Route path="/" element={<Browser />} /> 
        </Routes>
      </Router>
    </WalletContext.Provider>
  );
};

export default App;