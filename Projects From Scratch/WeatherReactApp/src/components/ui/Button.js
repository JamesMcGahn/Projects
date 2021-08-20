import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    root: {
        backgroundColor: props => props.backgroundColor,
        '&:hover': {
            backgroundColor: '#039',
        }

    },
    text: {
        textTransform: 'none',

        '& a': {
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'Metabold'
        }
    }
}))


function CardButton(props) {
    const { route, id, backgroundColor } = props;
    const classes = useStyles({ backgroundColor })
    return (
        <Button size="large" classes={{ root: classes.root, label: classes.text }} >
            <Link to={`${route}${id}`}>
                {props.children}
            </Link>
        </Button>
    );
}

export default CardButton;