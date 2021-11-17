import React, { useState } from 'react'
import HighScore from './assets/highscore.json';
//import images from './Images';

import cardBack from './assets/img/cardback.png';
import blankCard from './assets/img/blankcard.png';
import Clubs2 from './assets/img/CLUBS_2_black.png';

var deckId; // deck_id for API
var newDeck = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=12"; // API to get a full 6 decks
var playerTotal; // holds player hand score
var dealerTotal; // holds dealer hand score
var ss = window.sessionStorage; // to store dealerTotal
ss.setItem('dT', 0); // initializes dealerTotal to 0
ss.setItem('pT', 0); // initializes playerTotal to 0
ss.setItem('currCard', 0); // initializes current card in array to 0
ss.setItem('playersPoints', 0);


// full blackjack game
function CardGame ()  {
    const [highScore, setHScore] = useState(() => {
        console.log(JSON.parse(HighScore.score));
        return JSON.parse(HighScore.score);
    });

    const [pPoints, setpPoints] = useState(0);

    const [dCard1, setDCard1] = useState();
    const [dCard2, setDCard2] = useState();
    const [dCard3, setDCard3] = useState();
    const [dCard4, setDCard4] = useState();
    const [dCard5, setDCard5] = useState();

    const [pCard1, setPCard1] = useState();
    const [pCard2, setPCard2] = useState();
    const [pCard3, setPCard3] = useState();
    const [pCard4, setPCard4] = useState();
    const [pCard5, setPCard5] = useState();

    const clubs22 = '/imgs/Clubs_2_blank.png';

    const setDealCard1 = (path) => {
        setDCard1(path);
    }

    const setDealCard2 = (path) => {
        setDCard2(path);
    }

    var playerCardCount = 0; // holds player cards in hand
    var dealerCardCount = 0; // holds dealer cards in hand
    var dealerDownCard; // stores image string of dealers down card
    var drawURL = "https://deckofcardsapi.com/api/deck/"; // base url to draw a card
    //var playerPoints = 0; // holds points for current player

    // gives another card to player
    const handleHit = () => {
        if(parseInt(ss.getItem('pT')) < 21 && playerCardCount < 5){
            dealCard(1);
        }
        if (playerCardCount === 5){
            handleStay();
        }
    }

    // deals 3 more cards to dealer, regardless of total
    const dealerPlays = () => {
        if (parseInt(ss.getItem('dT')) < 17 && parseInt(ss.getItem('dT')) < 21 && dealerCardCount < 5){
            dealCard(2);
        }  
    }

    // ends player turn and begins dealer turn
    const handleStay = () => {
        showDealerCard();
        dealerPlays();
        dealerPlays();
        dealerPlays();

        if(playerTotal > dealerTotal || dealerTotal > 21){
            editPlayerPoints(10, "win");
        }
        else{
            editPlayerPoints(5, "lose");
        }
    }

    // turns over dealer card with images
    const showDealerCard = () => {
        //dCard1 = dealerDownCard;
    }

    const dealCard = (person) => {
        var suits = JSON.parse(ss.getItem('cardArray'));
        var thisDeal = parseInt(ss.getItem('currCard'));
        if (person === 1){
            dealPlayerCard(suits[thisDeal][0], suits[thisDeal][1]);
        }
        else {
            dealDealerCard(suits[thisDeal][0], suits[thisDeal][1]);
        }
        thisDeal++;
        ss.setItem('currCard', thisDeal);
    }


    // deals first 4 cards, checks player blackjack
    const dealHand = () => {
        var suits = JSON.parse(ss.getItem('cardArray'));
        var thisDeal = parseInt(ss.getItem('currCard'));
        if (thisDeal < 610){
            dealPlayerCard(suits[thisDeal][0], suits[thisDeal][1]);
            thisDeal++;
            dealDealerCard(suits[thisDeal][0], suits[thisDeal][1]);
            thisDeal++;
            dealPlayerCard(suits[thisDeal][0], suits[thisDeal][1]);
            thisDeal++;
            dealDealerCard(suits[thisDeal][0], suits[thisDeal][1]);
            ss.setItem('currCard', (thisDeal + 1));
        }
        if (checkBlackJack(parseInt(ss.getItem('pT')))) {
            editPlayerPoints(25, "win");
        } 
        if (checkBlackJack(parseInt(ss.getItem('dT')))) {
            editPlayerPoints(5, "lose");
        }
    }

    // edits points to playerScore after hand ends
    const editPlayerPoints = (points, result) => {
        var currPoints = parseInt(ss.getItem('playersPoints'));
        // add points
        if(result === "win"){
            currPoints += points;
            setPoints(currPoints);
            isHighScore(currPoints);
            resetHand();
        }
        // subtract points
        else {
            currPoints -= points;
            setPoints(currPoints);
            resetHand();
        }
    }

    // checks if playerPoints is greater than highScore
    const isHighScore = (newScore) => {
        console.log("High Score: ");
        if(newScore > highScore) {
            setHighScore(newScore);
        }
    }

    // sets new high score
    function setHighScore(newScore) {
        console.log("In setHighScore: " + newScore);
        setHScore(newScore);
    }

    // sets pPoints for display
    function setPoints(playersPoints) {
        ss.setItem('playersPoints', playersPoints);
        setpPoints(playersPoints);
    }

    // returns true if player has blackjack, else false
    const checkBlackJack = (total) => {
        return(total === 21);
    }

    // returns true if player busts, else false
    const checkBust = (total) => {
        return(total > 21);
    }

    // resets variables for new hand
    const resetHand = () => {
        playerTotal = 0;
        dealerTotal = 0;
        ss.setItem('dT', 0);
        ss.setItem('pT', 0);
        playerCardCount = 0;
        dealerCardCount = 0;
        
    }

    // sends next card to player, updates their hand total and builds card image url
    const dealPlayerCard = (suits, values) => {
        playerTotal = parseInt(ss.getItem('pT'));
        var suit = suits;
        var value = values;
        //console.log("Player: " + suit + " " + value);
        playerCardCount++;
        if(value !== "ACE" && value !== "KING" && value !== "QUEEN" && value !== "JACK") { // makes sure card is # before adding to total
            // FIND A WAY TO SET IMG VARIABLE AND DISPLAY AFTER IT'S DEALT
            buildCardImage(suit, value);
            if (value > 10){
                value = 10;
            }
            playerTotal += parseInt(value);
            ss.setItem('pT', playerTotal);
            console.log("Player dealt NUM: " + suit + ":" + value + "= " + playerTotal);
        }
        else {
            value = cardToNum(value);
            buildCardImage(suit, value);
            if (value > 10){
                value = 10;
            }
            playerTotal += parseInt(value); // converts letter card to # value
            ss.setItem('pT', playerTotal);
            console.log("Player dealt FACE: " + suit + ":" + value + "= " + playerTotal);
        }
        if(checkBust(playerTotal)){
            alert("BUSTED!");
            editPlayerPoints(5, "lose");
        }
        
    }

    // sends next card to dealer, updates their hand total and builds card image url
    const dealDealerCard = (suits, values) => {
        var suit = suits;
        var value = values;
        //console.log("Dealer: " + suit + " " + value);
        
        dealerTotal = parseInt(ss.getItem('dT'));
        
            dealerCardCount++;
            if(value !== "ACE" && value !== "KING" && value !== "QUEEN" && value !== "JACK") { 
                if (dealerTotal !== 0){
                    // show card
                    buildCardImage(suit, value);
                }
                else{
                    // show card back
                    setDealCard1("Clubs_10_black.png"); 
                    setDealCard2(Clubs2);
                    
                    // store card image for later
                    dealerDownCard = buildCardImage(suit, value);
                }
                if (value > 10){
                    value = 10;
                }
                dealerTotal += parseInt(value);
                ss.setItem('dT', dealerTotal);
                console.log("Dealer dealt NUM: " + suit + ":" + value + "= " + dealerTotal);
            }
            else {
                value = cardToNum(value);
                buildCardImage(suit, value);
                if (value > 10){
                    value = 10;
                }
                dealerTotal += parseInt(value); // converts letter card to # value
                ss.setItem('dT', dealerTotal);
                console.log("Dealer dealt FACE: " + suit + ":" + value + "= " + dealerTotal);
            }
        
        
    }

    // converts face card to numerical value
    const cardToNum = (card) => {
        var value;
        switch (card) {
            case "ACE":
                value = 14;
                break;
            case "KING":
                value = 13;
                break;
            case "QUEEN":
                value = 12;
                break;
            case "JACK":
                value = 11;
                break;
            default:
                break;
        }
        return value;
    }

    // builds asset url for card
    const buildCardImage = (suit, value) => {
        return("/assets/imgs/cards/" + suit + "_" + value + "_black.png");
    }


    // draws all 6 decks in order and stores in array
    const getCards = async (CB) => {
        const res = await fetch(drawURL + deckId + "/draw/?count=624");
        const card = await res.json();
        const indCards = card.cards;
        var cardArr = [];
        for (var c = 0; c < 624; c++){
            var thisSuit = indCards[c].suit;
            var thisValue = indCards[c].value;
            var thisCard = [thisSuit, thisValue];
            cardArr.push(thisCard);
        }
        ss.setItem("cardArray", JSON.stringify(cardArr));
        CB();
    }

    // gets a new deck from api when page loads
    window.onload = async function getNewDeck() {
        try {
            const res = await fetch(newDeck);
            if(!res.ok) throw new Error();
            const deck = await res.json();
            deckId = deck.deck_id;
            console.log("High Score Load: " + highScore);
            getCards(dealHand);
        }
        catch(error) {
            console.log(error);
        }
    }

    // sets buttons on page and allows user control
    return (
        <div className="game">
            <div className="game_score">
                <h5>High Score: {highScore}</h5>
                <h5>Player Score: {pPoints}</h5>
            </div>

            <div className="dealer_cards">
                <img src={dCard1} width="185" height="auto" />
                <img src={process.env.PUBLIC_URL + clubs22} width="185" height="auto" />
            </div>

            <div className="player_cards">

            </div>

            <div className="game_controls">
                <button className="control_btn" onClick={dealHand}>Deal</button>
                <div className="divider" />
                <button className="control_btn" onClick={handleHit}>Hit</button>
                <div className="divider" />
                <button className="control_btn" onClick={handleStay}>Stay</button>
            </div>
        </div>
    )
}


export default CardGame

/*
GAME TEST CASES

Player > Dealer, no busts: 

Player < Dealer, no busts:

Player Busts:

Dealer Busts:

*/