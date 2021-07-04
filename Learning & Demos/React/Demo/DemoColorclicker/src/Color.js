import React, { Component } from 'react'
import './Color.css'
import { choice } from './helpers.js'

class Color extends Component {

    constructor(props) {
        super(props)
        this.state = { color: choice(this.props.allColors) }
        this.handleClick = this.handleClick.bind(this)
    }

    pickColor() {
        let newColor
        do {
            newColor = choice(this.props.allColors)
        } while (newColor === this.state.color)

        this.setState({ color: newColor })
    }


    handleClick() {
        this.pickColor()
    }
    render() {
        return (
            <div className="Color" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}> </div>
        )
    }
}

export default Color