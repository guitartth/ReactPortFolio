import React from 'react'

var deckId; // deck_id for API
var newDeck = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6"; // API to get a full 6 decks
var cardsLeft; // cards remaining in 6 decks

// full blackjack game
const CardGame = () => {
    var playerTotal = 0; // holds player hand score
    var dealerTotal = 0; // holds dealer hand score
    var playerCardCount = 0; // holds player cards in hand
    var dealerCardCount = 0; // holds dealer cards in hand
    var drawURL = "https://deckofcardsapi.com/api/deck/"; // base url to draw a card
    var playerPoints = 0; // holds points for current player
    var highScore = 0; // holds site lifetime high score

    // gives another card to player
    const handleHit = () => {
        if(playerTotal < 21 && playerCardCount <= 5){
            dealPlayerCard();
        }
    }

    // ends player turn and begins dealer turn
    const handleStay = () => {
        showDealerCard();
    }

    // turns over dealer card with images
    const showDealerCard = () => {
        dealDealerCard();
    }

    // deals first 4 cards, checks player blackjack
    const dealHand = () => {
        if(cardsLeft >= 10){
            dealPlayerCard();
            dealDealerCard();
            dealPlayerCard();
            dealDealerCard();
            if(checkBlackJack()){
                editPlayerPoints(25, "win");
            } 
        }
        
    }

    // edits points to playerScore after hand ends
    const editPlayerPoints = (points, result) => {
        // add points
        if(result === "win"){
            playerPoints += points;
            isHighScore();
            resetHand();
        }
        // subtract points
        else {
            playerPoints -= points;
            resetHand();
        }
    }

    // checks if playerPoints is greater than highScore
    const isHighScore = (score) => {
        if(score > highScore) {
            highScore = score;
        }
    }

    // returns true if player has blackjack, else false
    const checkBlackJack = (total) => {
        return(total === 21);
    }

    // resets variables for new hand
    const resetHand = () => {
        playerTotal = 0;
        dealerTotal = 0;
        playerCardCount = 0;
        dealerCardCount = 0;
    }

    // deals a card to player, updates their hand total and builds card image url
    const dealPlayerCard = async () => {
        const res = await fetch(drawURL + deckId + "/draw/?count=1");
        const card = await res.json();
        var suit = card.cards[0].suit;
        var value = card.cards[0].value;
        if(value !== "ACE" && value !== "KING" && value !== "QUEEN" && value !== "JACK") { // makes sure card is # before adding to total
            // FIND A WAY TO SET IMG VARIABLE AND DISPLAY AFTER IT'S DEALT
            buildCardImage(suit, value);
            playerTotal += parseInt(value);
        }
        else {
            buildCardImage(suit, value);
            playerTotal += parseInt(cardToNum(value)); // converts letter card to # value
        }
        console.log("player dealt");
    }

    // deals a card to dealer, updates their hand total and builds card image url
    const dealDealerCard = async () => {
        const res = await fetch(drawURL + deckId + "/draw/?count=1");
        const card = await res.json();
        var suit = card.cards[0].suit;
        var value = card.cards[0].value;
        if(value !== "ACE" && value !== "KING" && value !== "QUEEN" && value !== "JACK") { // makes sure card is # before adding to total
            if(dealerTotal !== 0) {
                buildCardImage(suit, value);
                dealerTotal += parseInt(value);
                console.log(dealerTotal);
            }
            else {
                console.log("/assets/imgs/cards/cardback.png"); // sets dealerCard1 to card back until players turn is over
                dealerTotal += parseInt(value);
                console.log(dealerTotal);
            }  
        }
        else {
            if(dealerTotal !== 0) {
                buildCardImage(suit, value);
                dealerTotal += parseInt(value);
                console.log(dealerTotal);
            }
            else {
                console.log("/assets/imgs/cards/cardback.png"); // sets dealerCard1 to card back until players turn is over
                dealerTotal += parseInt(value);
                console.log(dealerTotal);
            } 
        }
        console.log("dealer dealt");
        console.log(playerTotal);
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

    // gets a new deck from api when page loads
    async function getNewDeck() {
        try {
            const res = await fetch(newDeck);
            if(!res.ok) throw new Error();
            const deck = await res.json();
            cardsLeft = 312;
            deckId = deck.deck_id;
        }
        catch(error) {
            console.log(error);
        }
    }


    // sets buttons on page and allows user control
    return (
        <div className="game">
            <div className="game_score">
                <h5>Player Score: 0</h5>
                <h5>High Score: 0</h5>
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

