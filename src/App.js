import React from 'react'
import './assets/css/fonts.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Popup from './Popup';
import { useState, useEffect } from 'react';

function App() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 500);
  }, []);


  return (
    <div className="App">
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h2>Oops!</h2>
        <h3>This is embarrassing</h3>
        <h5>You got here a bit before my site was finished.<br></br> Maybe a game or two of blackjack to keep you entertained while I finish up?</h5>
      </Popup>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
