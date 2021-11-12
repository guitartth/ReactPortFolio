import React, {useState, useEffect } from 'react'
import './assets/css/fonts.css';
import Header from './Header';
import CardGame from './CardGame';
import Footer from './Footer';
import Popup from './Popup';


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
        <h5>You got here a bit before the site was finished.<br></br> Maybe a game or two of blackjack to keep you entertained while I finish up?</h5>
      </Popup>
      <Header />
      <CardGame />
      <Footer />
    </div>
  );
}

export default App;
