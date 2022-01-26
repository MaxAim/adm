import './App.css';
import Deck from './Containers/Deck/Deck';
import Button from './Components/Button/Button';
import { useState } from 'react';

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [text, setText] = useState("");
  var deck = [];
  var cardsNum = 10;
  var i = cardsNum;
  while(deck.length < cardsNum) {
      deck.push(i);
      i--
  }

  function Previous() {
    if (currentCard) {
      setCurrentCard(currentCard - 1);
    }
  }

  function Next() {
    if (currentCard < (cardsNum - 1)) {
      setCurrentCard(currentCard + 1);
    }
  }

  return (
    <div className="App">
      <Deck deck={deck} text={text} setText={setText} currentCard={currentCard}/>
      <div>
        <Button direction={Previous} text={"Previus"} />
        <Button direction={Next} text={"Next"} />
      </div>
    </div>
  );
}

export default App;
