import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles/PaletteFooterStyles'

class PaletteFooter extends Component {
    render() {
        const { classes } = this.props
        return (
            <footer className={classes.PaletteFooter}>
                {this.props.paletteName}
                <span className={classes.emoji}>{this.props.emoji}</span>
            </footer>
        )
    }
}
export default withStyles(styles)(PaletteFooter)