import "./Deck.css"
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";

const Deck = ({deck}) => {
    const [text, setText] = useState("Loading...");
    const [currentCard, setCurrentCard] = useState(0);
    const [shuffledDeck, setShuffledDeck] = useState([]);
    var unshuffledDeck = deck;
    useEffect(() => {
        while (unshuffledDeck.length !== 0){
            let randomCard = Math.floor(Math.random() * unshuffledDeck.length);
            let shuffledCard = unshuffledDeck[randomCard];
            setShuffledDeck(s => [...s, shuffledCard]);
            unshuffledDeck.splice(randomCard, 1);
        }
    }, [unshuffledDeck]);
    

    useEffect(() => {
        setTimeout(() => {
            setCurrentCard(currentCard + 1);
            setText(shuffledDeck[currentCard]);
        }, 3000)
      },[currentCard, unshuffledDeck, shuffledDeck]);
    
      return <Card card={text} />;
};

export default Deck