import './App.css';
import Deck from './Containers/Deck/Deck';

function App() {
  const deck = ["Carta 1", "Carta 2", "Carta 3", "Carta 4", "Carta 5", "Carta 6", "Carta 7" ];
  return (
    <div className="App">
      <Deck deck={deck} />
    </div>
  );
}

export default App;
