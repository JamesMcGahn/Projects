import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
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
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
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
        width: '60%'
    }
}));

function Navbar({ unit, setSearchText, setUnit }) {
    const handleChangeUnit = (e) => {
        setUnit(e.target.value)
        console.log(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchText(searchPlaceholder)
        setSearchPlaceholder('')
    }

    const handleChange = (e) => {
        setSearchPlaceholder(e.target.value)
    }

    const classes = useStyles();
    const [searchPlaceholder, setSearchPlaceholder] = useState('')

    return (
        <div className={classes.root} >
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to={`/`}>
                            Weather App
                        </Link>
                    </Typography>
                    <div className={classes.iconCont}>
                        <form onSubmit={handleSearch}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    value={searchPlaceholder}
                                    onChange={handleChange}
                                    placeholder={searchPlaceholder}
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