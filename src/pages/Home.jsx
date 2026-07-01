import React, { useState, useEffect } from 'react'
import CardGame from '../CardGame';
import Popup from '../Popup';

const Home = () => {
    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 500);
    }, []);

    return (
        <>
            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h2>Oops!</h2>
                <h3>This is embarrassing</h3>
                <h5>You got here a bit before the site was finished.<br></br> Maybe a game or two of blackjack to keep you entertained while I finish up?</h5>
            </Popup>
            <CardGame />
        </>
    )
}

export default Home
