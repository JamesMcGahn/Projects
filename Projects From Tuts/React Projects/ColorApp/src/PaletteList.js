import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import MiniPalette from './MiniPalette'
import styles from './styles/PaletteListStyles'

class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Color App</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {this.props.palettes.map(p => {
                            return (
                                <MiniPalette key={p.id} {...p} handleClick={() => this.goToPalette(p.id)} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)