import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
class SinglePalette extends Component {
    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = {
            format: 'hex'
        }
        this.changeFormat = this.changeFormat.bind(this)
    }

    gatherShades(palette, colorToFilter) {
        let shades = []
        let allColors = palette.colors

        for (let key in allColors) {
            shades = shades.concat(allColors[key].filter(color => color.id === colorToFilter))
        }
        return shades.slice(1)
    }

    changeFormat(format) {
        this.setState({ format: format })
    }

    render() {
        return (
            <div className="SingleColorPalette Palette">
                <Navbar changeFormat={this.changeFormat} showingAll={false} />
                <h1>Single Color Palette</h1>
                <div className='Palette-colors'>
                    {this._shades.map((color, i) => {
                        return (
                            <ColorBox
                                key={color.name}
                                name={color.name}
                                background={color[this.state.format]}
                                showLink={false} />
                        )
                    })}
                    <div className="go-back ColorBox">
                        <Link to={`/palette/${this.props.palette.id}`} className="back-button"> Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={this.props.palette.paletteName}
                    emoji={this.props.palette.emoji} />
            </div>
        )
    }
}

export default SinglePalette