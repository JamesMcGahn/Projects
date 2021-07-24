import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Palette from './Palette'
import PaletteList from './PaletteList'
import SinglePalette from './SinglePalette'
import NewPaletteForm from './NewPaletteForm'
import seedColors from './SeedColors'
import { generatePalette } from './colorHelpers'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Page from './Page'

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
      <Route render={({ location }) =>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='Page' timeout={500}>
            <Switch location={location}>
              <Route exact path="/palette/new"
                render={(routeProps) =>
                (<Page>
                  <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps} />
                </Page>
                )} />
              <Route exact path='/' render={(routeProps) => (
                <Page>
                  <PaletteList palettes={this.state.palettes} removePalette={this.removePalette} {...routeProps} />
                </Page>
              )} />
              <Route exact path='/palette/:id' render={(routeProps) => (
                <Page>
                  <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                </Page>
              )} />
              <Route exact path='/palette/:paletteId/:colorId' render={routeProps => (
                <Page>
                  <SinglePalette
                    colorId={routeProps.match.params.colorId}
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.paletteId)
                    )}
                  />
                </Page>
              )} />
              <Route path='/' render={(routeProps) => (
                <Page>
                  <PaletteList palettes={this.state.palettes} removePalette={this.removePalette} {...routeProps} />
                </Page>
              )} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      }
      />
    )
  }
}


export default App;
