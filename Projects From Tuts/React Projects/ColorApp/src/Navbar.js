import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import 'rc-slider/assets/index.css'
import './Navbar.css'

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
        return (
            <header>
                <div className="Navbar">
                    <div className="logo">
                        <Link to='/'>Color App</Link>
                    </div>
                    {this.props.showingAll && (
                        <div className="slider-container">
                            <span>Level: {this.props.level}</span>
                            <div className="slider">
                                <Slider defaultValue={this.props.level}
                                    min={100} max={900} step={100} onAfterChange={this.props.changeLevel} />
                            </div>
                        </div>)}
                    <div className="select-container">
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

export default Navbar