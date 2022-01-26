import "./Deck.css"
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";

const Deck = ({deck, text, setText, currentCard}) => {
    const [shuffledDeck, setShuffledDeck] = useState([]);
    useEffect(() => {
        while (deck.length !== 0){
            let randomCard = Math.floor(Math.random() * deck.length);
            let shuffledCard = deck[randomCard];
            setShuffledDeck(s => [...s, shuffledCard]);
            deck.splice(randomCard, 1);
        }
    }, [deck]);

    useEffect(() => {
        setText(shuffledDeck[currentCard]);
      },[currentCard, shuffledDeck, setText]);
    
      return <Card card={text} />;
};

export default Deck