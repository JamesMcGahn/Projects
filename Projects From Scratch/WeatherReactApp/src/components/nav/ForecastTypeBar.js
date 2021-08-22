import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'theme.palette.background.paper',
        // width: '100wh',

    },
    tab: {
        "& a": {
            display: 'block',
            textDecoration: "none",
            // width: '100%',
            height: '100%',
            fontSize: '1.1rem',
            fontFamily: 'Metabold',
            textTransform: 'none',
            color: 'white'
        },
    },
    tabDiv: {
        backgroundColor: '#113076',
        "& button": {
            minWidth: '16.66%',

        }
    },
    indicator: {
        backgroundColor: 'white'
    }
    ,
    hidden: {
        display: 'none'
    },
    menuDiv: {
        minWidth: '25%'
    },
    menuText: {
        display: 'block',
        textDecoration: "none",
        height: '100%',
        fontSize: '1.1rem',
        fontFamily: 'Metabold',
        textTransform: 'none',
        color: 'white'
    },
    menuItem: {
        marginTop: 0,
        '& :hover': {
            color: '#113076'
        },
        '& a': {
            display: 'block',
            textDecoration: "none",
            height: '100%',
            fontSize: '1.1rem',
            fontFamily: 'Meta',
            textTransform: 'none',
            color: 'black',
        }
    },
    menuSubTitle: {
        margin: '5px 0 0 10px',
        fontSize: '1.2rem',
        fontFamily: 'MetaBold',
    }

}));

export default function ForecastTypeBar({ id, typeTabIndex, setTypeTabIndex }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    let checkID = id ? id : ''

    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
    };
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setTypeTabIndex(newValue);
    };

    const menu = < div >
        <span className={classes.menuText}>More Forecasts <ArrowDropDownIcon style={{ fontSize: '1.2rem' }} /></span>
        <Menu
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            classes={{ paper: classes.menuDiv }}
        >
            <li className={classes.menuSubTitle}>SPECIALTY FORECASTS</li>
            <MenuItem classes={{ root: classes.menuItem }} onClick={handleClose}><Link to={`/airquality/${checkID}`}>Air Quality</Link></MenuItem>
            <MenuItem classes={{ root: classes.menuItem }} onClick={handleClose}><Link to={`/allergies/${checkID}`}>Allergy Tracker</Link></MenuItem>
        </Menu >
    </div >



    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    className={classes.tabDiv}
                    classes={{ indicator: classes.indicator }}
                    value={typeTabIndex}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label=""


                >
                    <Tab className={classes.tab} classes={{ root: classes.tab }} label={<Link to={`/today/${checkID}`}>Today </Link>} index={0} />

                    <Tab className={classes.tab} label={<Link to={`/hourly/${checkID}`}>Hourly</Link>} index={1} />

                    <Tab className={classes.tab} label={<Link to={`/daily/${checkID}`}>Daily</Link>} index={2} />

                    <Tab className={classes.tab} label={<Link to={`/weekend/${checkID}`}>Weekend</Link>} index={3} />

                    <Tab className={classes.tab} label={<Link to={`/radar/${checkID}`}>Radar</Link>} index={4} />

                    <Tab className={classes.tab} label={menu} index={5} onClick={handleClick} />

                    <Tab classes={{ root: classes.hidden }} index={6} />
                </Tabs>
            </AppBar>

        </div >
    );
}