import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
        margin: props => props.margin,
        padding: props => props.padding,
        width: props => props.width,
        background: props => props.background,
        display: props => props.display,
        flexDirection: props => props.flexDirection,
        justifyContent: props => props.justifyContent,
        alignItems: props => props.alignItems,
        height: props => props.height,
        color: props => props.color,
        borderBottom: props => props.borderBottom,
        borderTop: props => props.borderTop,
        flexWrap: props => props.flexWrap,
        minHeight: props => props.minHeight,
        border: props => props.border
    },
}));


function Container({ id, display, margin, padding, width, flexDirection, justifyContent, alignItems, background, children, height, color, borderBottom, borderTop, flexWrap, minHeight, border, ...rest }) {
    const classes = useStyles({ id, display, margin, padding, width, flexDirection, justifyContent, alignItems, background, height, color, borderBottom, borderTop, flexWrap, minHeight, border })
    { console.log }
    return (
        <div className={classes.container} {...rest}>
            {children}
        </div>
    );
}

export default Container;