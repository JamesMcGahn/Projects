import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { withStyles } from '@material-ui/styles'
import styles from './styles/PaletteStyles'

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
        const { classes } = this.props
        return (
            <div className={classes.Palette}>
                <Navbar changeFormat={this.changeFormat} showingAll={false} />
                <h1>Single Color Palette</h1>
                <div className={classes.colors}>
                    {this._shades.map((color, i) => {
                        return (
                            <ColorBox
                                key={color.name}
                                name={color.name}
                                background={color[this.state.format]}
                                showingFullPalette={false} />
                        )
                    })}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${this.props.palette.id}`} > Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={this.props.palette.paletteName}
                    emoji={this.props.palette.emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(SinglePalette)