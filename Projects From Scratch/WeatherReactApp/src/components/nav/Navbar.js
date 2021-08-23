import React, { useState, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios'
import { OW_API_KEY } from '../../keys.js'
import ClickOutsideWrapper from '../helpers/ClickOutsideWrapper'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,


    },
    appbar: {
        backgroundColor: '#039',
        color: 'white'
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
    },
    searchResults: {
        marginTop: '1px',
        marginLeft: '4%',
        backgroundColor: 'white',
        color: 'black',
        flexGrow: 1,
        width: '95%',
        borderRadius: '5px !important',
        boxShadow: '0 3px 20px rgb(0 0 0 / 0.5)'
    },
    searchContainer: {
        position: 'absolute',
        top: '30%',
        left: '42%',
        zIndex: 10,

    },
    list: {
        '& div.MuiButtonBase-root:hover': {
            backgroundColor: '#113076',
            color: 'white',
        }
    }
}));

function Navbar({ unit, setSearchResultLoc, setUnit }) {
    let history = useHistory();
    const classes = useStyles();
    const [showSearchResult, setShowSearchResults] = useState(false)
    const [searchResults, setSearchResults] = useState([]);
    const [searchPlaceholder, setSearchPlaceholder] = useState('')

    const handleSearchResultClick = (index) => {
        setShowSearchResults(false)
        setSearchResultLoc(searchResults[index])
        setSearchResults([])
        history.push("/");
    }

    const handleChangeUnit = (e) => {
        setUnit(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        coordsFetch()
        setSearchPlaceholder('')
    }

    const handleChange = (e) => {
        setSearchPlaceholder(e.target.value)
    }


    const coordsFetch = async () => {
        try {
            if (searchPlaceholder.length < 1) {
                throw new Error('No search text')
            } else {
                const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${searchPlaceholder}&limit=5&appid=${OW_API_KEY}`)
                const { data } = res
                console.log(data)
                setSearchResults(data)
                setShowSearchResults(true)
            }
        }
        catch (e) {
            console.log('coords', e)
        }
    }



    return (
        <div className={classes.root} >
            <AppBar position="static" classes={{ root: classes.appbar }} >
                <Toolbar>
                    <div className={classes.iconCont}>
                        <div className={classes.logoContainer}>
                            <Link to={`/`}>
                                <img className={classes.logo} src="/images/ReactWeatherChannellogo.jpg" alt='logo' />
                            </Link>
                        </div>
                        <form onSubmit={handleSearch}>
                            <div className={classes.searchContainer}>
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
                                {showSearchResult ?
                                    <ClickOutsideWrapper setStatefn={setShowSearchResults}>
                                        <div className={classes.searchResults}>
                                            <List classes={{ root: classes.list }} component="nav" aria-label="main mailbox folders">

                                                {searchResults.length ? searchResults.map((item, i) =>
                                                    <ListItem button key={`${i}-search-result-item`}>
                                                        <ListItemText onClick={() => handleSearchResultClick(i)} primary={`${item.name}, ${item.state ? `${item.state}, ${item.country} ` : `${item.country}`}`} />
                                                    </ListItem>
                                                )
                                                    : null

                                                }
                                            </List>
                                        </div>
                                    </ClickOutsideWrapper>
                                    : null}
                            </div>
                        </form>
                        <FormControl className={classes.formControl}>
                            <NativeSelect
                                native='true'
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