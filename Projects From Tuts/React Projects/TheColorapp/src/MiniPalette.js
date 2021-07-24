import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'


class MiniPalette extends PureComponent {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleDelete(e) {
        e.stopPropagation()
        this.props.handleDialog(this.props.id)
    }

    handleClick() {
        this.props.goToPalette(this.props.id)
    }

    render() {
        const { classes, paletteName, emoji, colors, id } = this.props
        return (
            <div className={classes.root} onClick={this.handleClick}>
                <DeleteIcon className={classes.deleteIcon} onClick={this.handleDelete} style={{ transition: "all 0.3s ease-in-out" }} />
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