import React, { Component } from 'react'
import PaletteMetaForm from './PaletteMetaForm'
import { Link } from 'react-router-dom'
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 400;
const styles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    navBtns: {
        marginRight: '1rem',
        "& a": {
            textDecoration: "none"
        }
    },
    button: {
        margin: '0 0.5rem',

    }
});


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
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
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