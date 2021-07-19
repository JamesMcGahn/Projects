import React, { Component } from 'react'

class PaletteFooter extends Component {
    render() {
        return (
            <footer className="Palette-footer">
                {this.props.paletteName}
                <span className='emoji'>{this.props.emoji}</span>
            </footer>
        )
    }
}
export default PaletteFooter