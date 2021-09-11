import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        minHeight: '10vh',
        color: 'black',
        display: 'flex',
        padding: '.5rem',
        borderBottom: '1px solid grey'
    },
    logo: {
        width: '25%'
    },
    nav: {
        width: '50%'
    },
    list: {
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        listStyle: 'none',
        '& li': {
            margin: ' 0 3rem 0 3rem'
        }
    },
    icons: {
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '1rem',
        '& svg': {
            fontSize: '2rem',
        }
    },

    expandedMenu: {
        position: 'absolute',
        width: '100%',
        zIndex: 10,
        padding: '2rem',
        borderBottom: '1px solid grey'
    }
}));

function MainNav(props) {
    const classes = useStyles();
    const [linkHover, setLinkHover] = useState(false)

    const handleMouseIn = (e) => {
        console.log(e.target.id)
        setLinkHover(true);
    };

    const handleMouseOut = () => {
        setLinkHover(false);
    };


    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.logo}></div>
                <div className={classes.nav}>
                    <ul className={classes.list}>
                        <li onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} id="shop">Shop</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={classes.icons}>
                    <ShoppingCartIcon />
                </div>
            </div>
            {linkHover && <div className={classes.expandedMenu}>
                {/* shop drop down goes here */}
                lorem ipsum dolor sit amet, consectetur
                lorem ipsum dolor sit amet, consectetur
                lorem ipsum dolor sit amet, consectetur
            </div>
            }
        </React.Fragment>
    );
}

export default MainNav;