import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { useStyles } from '../../styles/ui/buttonStyles'

function CardButton(props) {
    const { route, backgroundColor } = props;
    const classes = useStyles({ backgroundColor })
    return (
        <Button size="large" classes={{ root: classes.root, label: classes.text }} >
            <Link to={`${route}`}>
                {props.children}
            </Link>
        </Button>
    );
}

export default CardButton;