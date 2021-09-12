import React, { useState, useContext, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ShopifyContext } from '../../../contexts/shopifyContext'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        minHeight: '10vh',
        color: 'black',
        display: 'flex',
        padding: '.5rem',
        borderBottom: '1px solid grey',
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
        maxHeight: '300px',
        zIndex: 10,
        padding: '2rem',
        borderBottom: '1px solid grey',
        backgroundColor: 'white',
        display: 'flex',
    },
    expandedMenuNav: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    collectionItem: {
        padding: '.5rem',
    },
    featuredCollections: {
        width: '50%',
    }

}));

function MainNav() {
    const classes = useStyles();
    const { collectionList } = useContext(ShopifyContext)
    const [open, setOpen] = useState(false)
    const timer = useRef(null)


    const handleMouseIn = (e) => {
        console.log(e.target.id)
        setOpen(true);
    };

    const handleMenuIn = (e) => {
        clearTimeout(timer.current)
        setOpen(true)
    }

    const closeMenu = () => {
        timer.current = setTimeout(() => {
            setOpen(false)
        }, 750)
    }

    const handleMouseOut = () => {
        closeMenu()
    };

    const handleOnClick = () => {
        setOpen(false)
    }


    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.logo}></div>
                <div className={classes.nav}>
                    <ul className={classes.list}>
                        <li onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} id="shop">Shop
                        </li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={classes.icons}>
                    <ShoppingCartIcon />
                </div>
            </div>
            {open && <div className={classes.expandedMenu} onMouseOver={handleMenuIn} onMouseOut={handleMouseOut}>
                {/* shop drop down goes here */}
                <div className={classes.expandedMenuNav}>
                    {collectionList ? collectionList.map(item => (
                        <div className={classes.collectionItem} key={item.handle}><Link href={`/shop/collection/${item.handle}`} ><a onClick={handleOnClick}>{item.title}</a></Link></div>
                    ))
                        : <h1>loading</h1>}
                </div>
                <div className={classes.featuredCollections}>

                </div>
            </div>
            }
        </React.Fragment>
    );
}

export default MainNav;


