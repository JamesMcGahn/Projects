import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '15px'
    },
});
function Page(props) {
    const { id, tab, idChange, changeTab, findLocation, styles } = props;
    let history = useHistory()
    useEffect(() => {
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