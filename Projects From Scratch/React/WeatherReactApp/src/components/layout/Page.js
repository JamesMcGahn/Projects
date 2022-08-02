import React, { useEffect } from 'react';
import { useStyles } from '../../styles/layout/pageStyles'
import { useHistory } from 'react-router';

function Page(props) {
    const { id, tab, idChange, changeTab, findLocation, styles } = props;
    let history = useHistory()
    useEffect(() => {
        if (id === 'welcome') return changeTab(6)
        if (!id || findLocation(id).length === 0) {
            return history.push('/welcome')
        }
        idChange(id)
        changeTab(tab)
    }
        , [id])
    const classes = useStyles()
    return (
        <div className={classes.root} key={`${id}-${tab}`} style={styles}>
            {props.children}
        </div >
    );
}

export default Page;