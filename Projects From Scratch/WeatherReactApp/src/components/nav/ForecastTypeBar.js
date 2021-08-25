import React from 'react';
import { useStyles } from '../../styles/nav/forecastTypeBarStyles'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';



export default function ForecastTypeBar({ id, typeTabIndex, setTypeTabIndex }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    let checkID = id ? id : ''

    function IsMobile() {
        const size = useMediaQuery(
            json2mq({
                maxWidth: 650,
            }),
        );
        return size
    }
    let mobile = IsMobile()


    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
    };


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

    const tabs = <Tabs
        className={classes.tabDiv}
        classes={{ indicator: classes.indicator }}
        value={typeTabIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="">
        <Tab className={classes.tab} classes={{ root: classes.tab }} label={<Link to={`/today/${checkID}`}>Today </Link>} index={0} />
        <Tab className={classes.tab} label={<Link to={`/hourly/${checkID}`}>Hourly</Link>} index={1} />
        <Tab className={classes.tab} label={<Link to={`/daily/${checkID}`}>Daily</Link>} index={2} />
        <Tab className={classes.tab} label={<Link to={`/weekend/${checkID}`}>Weekend</Link>} index={3} />
        <Tab className={classes.tab} label={<Link to={`/radar/${checkID}`}>Radar</Link>} index={4} />
        <Tab className={classes.tab} label={menu} index={5} onClick={handleClick} />
        <Tab classes={{ root: classes.hidden }} index={6} />
    </Tabs>




    console.log(mobile)

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">

                {mobile ?
                    <div className={classes.mobileNav}>
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            {tabs}
                        </Collapse>
                    </div >
                    :
                    <Tabs
                        className={classes.tabDiv}
                        classes={{ indicator: classes.indicator }}
                        value={typeTabIndex}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="">
                        <Tab className={classes.tab} classes={{ root: classes.tab }} label={<Link to={`/today/${checkID}`}>Today </Link>} index={0} />
                        <Tab className={classes.tab} label={<Link to={`/hourly/${checkID}`}>Hourly</Link>} index={1} />
                        <Tab className={classes.tab} label={<Link to={`/daily/${checkID}`}>Daily</Link>} index={2} />
                        <Tab className={classes.tab} label={<Link to={`/weekend/${checkID}`}>Weekend</Link>} index={3} />
                        <Tab className={classes.tab} label={<Link to={`/radar/${checkID}`}>Radar</Link>} index={4} />
                        <Tab className={classes.tab} label={menu} index={5} onClick={handleClick} />
                        <Tab classes={{ root: classes.hidden }} index={6} />
                    </Tabs>
                }
            </AppBar>

        </div >
    );
}