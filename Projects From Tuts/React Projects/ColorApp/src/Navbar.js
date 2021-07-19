import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import 'rc-slider/assets/index.css'
import { withStyles } from '@material-ui/styles'
import styles from './styles/NavbarStyles'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            format: "hex",
            open: false
        }

        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackBar = this.closeSnackBar.bind(this)
    }

    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true })
        this.props.changeFormat(e.target.value)
    }

    closeSnackBar() {
        this.setState({ open: false })
    }

    render() {
        const { classes } = this.props
        return (
            <header>
                <div className={classes.Navbar}>
                    <div className={classes.logo}>
                        <Link to='/'>Color App</Link>
                    </div>
                    {this.props.showingAll && (
                        <div>
                            <span>Level: {this.props.level}</span>
                            <div className={classes.slider}>
                                <Slider defaultValue={this.props.level}
                                    min={100} max={900} step={100} onAfterChange={this.props.changeLevel} />
                            </div>
                        </div>)}
                    <div className={classes.selectContainer}>
                        <Select value={this.state.format} onChange={this.handleFormatChange}>
                            <MenuItem value='hex'>HEX</MenuItem>
                            <MenuItem value='rgb'>RGB</MenuItem>
                            <MenuItem value='rgba'>RGBA</MenuItem>
                        </Select>
                    </div>
                </div>
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id='message-id'>Format Changed to {this.state.format.toUpperCase()}</span>}
                    ContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                    onClose={this.closeSnackBar}
                    action={[<IconButton color='inherit' key='close' aria-label='close' >
                        <CloseIcon onClick={this.closeSnackBar} />
                    </IconButton>]}
                />
            </header >
        )
    }
}

export default withStyles(styles)(Navbar)