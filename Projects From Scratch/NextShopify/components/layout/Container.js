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
        border: props => props.border,
        [theme.breakpoints.down('lg')]: {
            flexDirection: props => props.lgFlexD,
            width: props => props.lgWidth,
            margin: props => props.lgMargin,
            paddingRight: props => props.lgPadding,
            alignItems: props => props.lgAlignItems,
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: props => props.mdFlexD,
            width: props => props.mdWidth,
            margin: props => props.mdMargin,
            padding: props => props.mdPadding,
            alignItems: props => props.mdAlignItems,
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: props => props.smFlexD,
            width: props => props.smWidth,
            margin: props => props.smMargin,
            padding: props => props.smPadding,
            alignItems: props => props.smAlignItems,
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: props => props.xsFlexD,
            width: props => props.xsWidth,
            margin: props => props.xsMargin,
            padding: props => props.xsPadding,
            alignItems: props => props.xsAlignItems,
        }
    },
}));


function Container({ lgAlignItems, mdAlignItems, smAlignItems, xsAlignItems, xsMargin, xsPadding, smPadding, smMargin, mdMargin, mdPadding,
    lgMargin, lgPadding, xsFlexD, xsWidth, smFlexD, smWidth, mdFlexD, mdWidth, lgFlexD, lgWidth, id,
    display, margin, padding, width, flexDirection, justifyContent, alignItems, background, children,
    height, color, borderBottom, borderTop, flexWrap, minHeight, border, ...rest }) {
    const classes = useStyles({
        lgAlignItems, mdAlignItems, smAlignItems,
        xsAlignItems, xsMargin, xsPadding, smPadding, smMargin, mdMargin, mdPadding, lgMargin, lgPadding,
        xsFlexD, xsWidth, smFlexD, smWidth, mdFlexD, mdWidth, lgFlexD,
        lgWidth, id, display, margin, padding, width, flexDirection, justifyContent, alignItems,
        background, height, color, borderBottom, borderTop, flexWrap, minHeight, border
    })
    { console.log }
    return (
        <div className={classes.container} {...rest}>
            {children}
        </div>
    );
}

export default Container;