import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from './styles/ColorBoxStyles'

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }


    render() {
        const { name, background, paletteId, id, showingFullPalette, classes } = this.props
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div
                        style={{ background }}
                        className={`${classes.copyOverlay} ${this.state.copied && classes.showOverlay}`}
                    />
                    <div className={`${classes.copyMessage} ${this.state.copied && classes.showMessage}`}>
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{this.props.background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette &&
                        (<Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMore}>More</span>
                        </Link>)}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);