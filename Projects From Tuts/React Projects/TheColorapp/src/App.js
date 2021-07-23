import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Palette from './Palette'
import PaletteList from './PaletteList'
import SinglePalette from './SinglePalette'
import NewPaletteForm from './NewPaletteForm'
import seedColors from './SeedColors'
import './App.css';
import { generatePalette } from './colorHelpers'

class App extends Component {
  constructor(props) {
    super(props)
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'))
    this.state = {
      palettes: (savedPalettes || seedColors),
    }
    this.savePalette = this.savePalette.bind(this)
    this.findPalette = this.findPalette.bind(this)
    this.removePalette = this.removePalette.bind(this)
  }
  findPalette(id) {
    return this.state.palettes.find((palette) => palette.id === id)
  }

  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, () => {
      window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
    })
  }

  removePalette(id) {
    const remainingPalettes = this.state.palettes.filter((palette) => palette.id !== id)
    this.setState({ palettes: remainingPalettes }, () => window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes)))

    return (
      <Redirect to='/' />
    )
  }


  render() {
    return (
      <Switch>
        <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps} />} />
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={this.state.palettes} removePalette={this.removePalette} {...routeProps} />} />
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
