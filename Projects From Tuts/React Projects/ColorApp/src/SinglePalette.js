import React, { Component } from 'react'
import ColorBox from './ColorBox'

class SinglePalette extends Component {
    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    }

    gatherShades(palette, colorToFilter) {
        let shades = []
        let allColors = palette.colors

        for (let key in allColors) {
            shades = shades.concat(allColors[key].filter(color => color.id === colorToFilter))
        }
        return shades.slice(1)
    }
    render() {
        return (
            <div className="Palette">
                <h1>SinglePalette</h1>
                <div className='Palette-colors'>
                    {this._shades.map(color => {
                        return (
                            <ColorBox
                                key={color.id}
                                name={color.name}
                                background={color.hex}
                                showLink={false} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default SinglePalette