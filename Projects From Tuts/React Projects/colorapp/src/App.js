import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Palette from './Palette'
import PaletteList from './PaletteList'
import SinglePalette from './SinglePalette'
import seedColors from './SeedColors'
import './App.css';
import { generatePalette } from './colorHelpers'

class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id)
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
        <Route exact path='/palette/:id' render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SinglePalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    )
  }
}


export default App;
