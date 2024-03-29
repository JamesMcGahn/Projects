import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from '../../styles/nav/navbarStyles'
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
import ClickOutsideWrapper from '../utils/ClickOutsideWrapper'

function Navbar({ unit, setSearchResultLoc, setUnit, setSnackBar }) {
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
                const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${searchPlaceholder}&limit=5&appid=${OW_API_KEY}`)
                const { data } = res
                setSearchResults(data)
                setShowSearchResults(true)
            }
        }
        catch (e) {
            setShowSearchResults(false)
            setSnackBar(true)

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

                                                {searchResults.length > 0 ? searchResults.map((item, i) =>
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