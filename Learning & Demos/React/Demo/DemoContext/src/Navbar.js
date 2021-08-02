import React, { Component } from "react";
import styles from "./styles/NavbarStyles";

import { ThemeContext } from "./contexts/ThemeContext";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { withLanguageContext } from "./contexts/LanguageContext";

const content = {
    english: {
        search: "Search",
        flag: "🇬🇧"
    },
    french: {
        search: "Chercher",
        flag: "🇫🇷"
    },
    spanish: {
        search: "Buscar",
        flag: "🇪🇸"
    }
};


class Navbar extends Component {
    static contextType = ThemeContext
    render() {
        const { classes } = this.props;
        const { isDarkMode, toggleDarkMode } = this.context
        const { language } = this.props.languageContext
        const { search, flag } = content[language]
        return (
            <div className={classes.root}>
                <AppBar position='static' color={isDarkMode ? "black" : "white"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color='inherit'>
                            <span>{flag}</span>
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color='inherit'>
                            App Title
                        </Typography>
                        <Switch onChange={toggleDarkMode} />
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder={search}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default withLanguageContext(withStyles(styles)(Navbar));