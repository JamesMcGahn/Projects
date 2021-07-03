
import './App.css';
import Lottery from './Lottery'


function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Pick 4" maxBalls={4} />
    </div>
  );
}

export default App;
