import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        minWidth: 60,
        [theme.breakpoints.up('sm')]: {
            width: '15ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    formControl: {
        margin: '.5rem',
        height: '2rem',
        minWidth: 60,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        color: 'white',
    },
    iconCont: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        margin: '.5rem 0 .5rem 0'
    },
    logo: {
        width: '100%'
    },
    logoContainer: {
        width: '5%'
    }
}));

function Navbar({ unit, setSearchText, setUnit }) {
    let history = useHistory();
    const handleChangeUnit = (e) => {
        setUnit(e.target.value)
        console.log(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchText(searchPlaceholder)
        setSearchPlaceholder('')
        history.push("/");
    }

    const handleChange = (e) => {
        setSearchPlaceholder(e.target.value)
    }

    const classes = useStyles();
    const [searchPlaceholder, setSearchPlaceholder] = useState('')

    return (
        <div className={classes.root} >
            <AppBar position="static" style={{ backgroundColor: '#1a357c' }} >
                <Toolbar>
                    <div className={classes.iconCont}>
                        <div className={classes.logoContainer}>
                            <Link to={`/`}>
                                <img className={classes.logo} src="/images/ReactWeatherChannellogo.jpg" />
                            </Link>
                        </div>
                        <form onSubmit={handleSearch}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    value={searchPlaceholder}
                                    onChange={handleChange}
                                    placeholder='Enter a City'
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </form>
                        <FormControl className={classes.formControl}>
                            <NativeSelect
                                native
                                value={unit}
                                onChange={handleChangeUnit}
                                inputProps={{
                                    name: 'units',
                                    id: 'units',
                                }}
                                style={{ color: 'white', marginLeft: '1rem' }}
                            >
                                <option aria-label="None" value="Metric" />
                                <option value={"imperial"}>F°</option>
                                <option value={"metric"}>C°</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navbar