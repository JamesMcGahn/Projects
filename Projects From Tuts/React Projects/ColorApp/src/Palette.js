import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { withStyles } from '@material-ui/styles'
import './Palette.css'

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors: {
        height: "90%"
    }
};

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
        const { classes } = this.props
        const { paletteName, emoji, id, colors } = this.props.palette
        const colorBoxes = colors[this.state.level].map(color =>
            <ColorBox background={color[this.state.format]}
                name={color.name} key={color.id} id={color.id} paletteId={id} showingFullPalette={true} />)
        return (
            <div className={classes.Palette}>
                <Navbar level={this.state.level} changeFormat={this.changeFormat} changeLevel={this.changeLevel} showingAll={true} />

                <div className={classes.colors}>
                    {colorBoxes}
                </div>

                <PaletteFooter paletteName={paletteName}
                    emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette)