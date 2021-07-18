import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from './SeedColors'
import './App.css';
import { generatePalette } from './colorHelpers'

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[5])} />
      </div>
    )
  }
}


export default App;
