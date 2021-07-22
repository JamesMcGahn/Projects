import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles/MiniPaletteStyles'


class MiniPalette extends Component {

    render() {
        const { classes, paletteName, emoji, colors } = this.props
        return (
            <div className={classes.root} onClick={this.props.handleClick}>
                <div className={classes.colors}>
                    {colors.map(color => {
                        return (
                            <div
                                className={classes.miniColor}
                                style={{ backgroundColor: color.color }}
                                key={color.name}>
                            </div>
                        )
                    })}
                </div>
                <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
            </div>
        )
    }
}
export default withStyles(styles)(MiniPalette)