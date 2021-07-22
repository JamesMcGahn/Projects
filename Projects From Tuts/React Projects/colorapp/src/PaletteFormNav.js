import React, { Component } from 'react'
import PaletteMetaForm from './PaletteMetaForm'
import { Link } from 'react-router-dom'
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from './styles/PaletteFormNavStyles'
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";


class PaletteFormNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formShowing: false
        }
        this.openCloseForm = this.openCloseForm.bind(this)
    }

    openCloseForm() {
        this.setState(st => ({ formShowing: !st.formShowing }))
    }

    render() {
        const { classes, open } = this.props
        return (
            < div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    color='default'
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: open
                            })}
                        >
                            <AddToPhotosIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit' noWrap>
                            Create a Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link to="/">
                            <Button variant='contained' color='secondary' className={classes.button}>Go Back</Button>
                        </Link>
                        <Button variant="contained" color="primary"
                            className={classes.button}
                            onClick={this.openCloseForm}>
                            SAVE
                        </Button>
                    </div>
                </AppBar>
                {this.state.formShowing && <PaletteMetaForm savePalette={this.props.savePalette} palettes={this.props.palettes} openCloseForm={this.openCloseForm} />}
            </div >
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);