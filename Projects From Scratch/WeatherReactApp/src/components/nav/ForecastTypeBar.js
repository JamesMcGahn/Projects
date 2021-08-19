import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'theme.palette.background.paper',
        width: '100wh',

    },
    tab: {
        "& a": {
            display: 'block',
            color: 'black',
            textDecoration: "none",
            width: '100%',
            height: '100%',
            fontSize: '1.1rem',
            fontFamily: 'Metabold',
            textTransform: 'none',
            color: 'white'
        },
    },
    tabDiv: {
        backgroundColor: '#113076;',
        "& button": {
            minWidth: '300px',

        }
    },
    indicator: {
        backgroundColor: 'white'
    }

}));

export default function ForecastTypeBar({ id, typeTabIndex, setTypeTabIndex }) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setTypeTabIndex(newValue);
    };

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
                    centered
                >
                    <Tab className={classes.tab} classes={{ root: classes.tab }} label={<Link to={`/${id}`}>Today </Link>} index={0} id={id} />

                    <Tab className={classes.tab} label={<Link to={`/${id}/hourly`}>Hourly</Link>} index={1} id={id} />

                    <Tab className={classes.tab} label={<Link to={`/${id}/daily`}>Daily</Link>} index={2} id={id} />
                </Tabs>
            </AppBar>

        </div >
    );
}