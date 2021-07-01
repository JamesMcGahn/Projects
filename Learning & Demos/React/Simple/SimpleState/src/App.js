import './App.css';
import Game from './Game'
import Rando from './Rando'
import Button from './Button'
import BrokenClick from './BrokenClick'
import Clicker from './Clicker'

function App() {
  return (
    <div className="App">
      <Game />
      <Rando maxNum={7} />
      <Button />
      <BrokenClick />
      <Clicker />
    </div>
  );
}

export default App;
