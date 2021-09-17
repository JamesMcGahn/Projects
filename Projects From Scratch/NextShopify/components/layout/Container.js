import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
        margin: props => props.margin ? props.margin : '',
        padding: props => props.padding ? props.padding : '',
        width: props => props.width ? props.width : '',
        background: props => props.background ? props.background : '',
        display: props => props.display ? props.display : '',
        flexDirection: props => props.flexDirection ? props.flexDirection : '',
        justifyContent: props => props.justifyContent ? props.justifyContent : '',
        alignItems: props => props.alignItems ? props.alignItems : '',
        height: props => props.height ? props.height : '',
        color: props => props.color ? props.color : '',
        borderBottom: props => props.borderBottom ? props.borderBottom : '',
        borderTop: props => props.borderTop ? props.borderTop : '',
        flexWrap: props => props.flexWrap ? props.flexWrap : '',
        minHeight: props => props.minHeight ? props.minHeight : '',
        border: props => props.border ? props.border : '',
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