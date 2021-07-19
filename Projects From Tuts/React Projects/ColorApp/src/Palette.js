import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'


import './Palette.css'


class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 500,
            format: 'hex'
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level) {
        this.setState({ level: level })
    }

    changeFormat(format) {
        this.setState({ format: format })
    }

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color =>
            <ColorBox background={color[this.state.format]}
                name={color.name} key={color.id} id={color.id} paletteId={this.props.palette.id} showLink={true} />)
        return (
            <div className="Palette">
                <Navbar level={this.state.level} changeFormat={this.changeFormat} changeLevel={this.changeLevel} />

                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className="Palette-footer">
                    {this.props.palette.paletteName}
                    <span className='emoji'>{this.props.palette.emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palette