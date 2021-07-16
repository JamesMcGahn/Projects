
import './App.css';
import { Route, Switch } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Cheese from './Cheese'
import Coke from './Coke'
import Chips from './Chips'
import NavBar from './NavBar'



function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact path="/"
          render={() => <VendingMachine />} />
        <Route
          exact path="/coke"
          render={() => <Coke />} />
        <Route
          exact path="/cheese"
          render={() => <Cheese />} />
        <Route exact path="/chips" render={() => <Chips />} />
      </Switch>
    </div>
  );
}

export default App;
