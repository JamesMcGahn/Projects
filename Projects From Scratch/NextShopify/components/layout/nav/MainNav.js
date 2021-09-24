import React, { useState, useContext, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { ShopifyContext } from '../../../contexts/shopifyContext'
import Link from 'next/link'
import Container from '../Container'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import CartBadge from '../../ui/CartBadge'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
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
            margin: ' 0 3% 0 3%',
            fontFamily: 'Cinzel Decorative, cursive, arial',
            fontSize: '1.3rem'
        },
        '& a': {
            position: 'relative',
        },

        '& a:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            bottom: 0,
            left: 0,
            backgroundColor: '#CBB682',
            visibility: 'hidden',
            transform: 'scaleX(0)',
            transition: 'all 0.3s ease-in-out',
        },
        '& a:hover:before': {
            visibility: 'visible',
            transform: 'scaleX(1)',
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
    collectionItem: {
        padding: '.5rem',
    },
    featuredCollections: {
        width: '50%',
    },
    root: {
        width: '100%',
    },
    svg: {
        color: 'black',
    },
    activeItem: {
        fontWeight: 'bold',
    }

}));

function MainNav() {
    const classes = useStyles();
    const { collectionList, cart } = useContext(ShopifyContext)
    const [open, setOpen] = useState(false)
    const timer = useRef(null)
    const [NavOpen, setNavOpen] = React.useState(false);
    const router = useRouter()

    function IsMobile() {
        const size = useMediaQuery(
            json2mq({
                maxWidth: 650,
            }),
        );
        return size
    }
    let mobile = IsMobile()

    const handleMouseIn = (e) => {
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

    const { pathname } = useRouter()
    const patchMatch = pathname.match(/(?<=\/)[a-z]+(?=\/)|(?<=\/)[a-z]+/)
    const onPage = patchMatch === null ? 'home' : patchMatch[0]
    return (
        <React.Fragment>

            {mobile
                ? <Container display='flex' alignItems="center" flexDirection='column' width='100%' background='#CBB682'>
                    <IconButton className={classes.svg} aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    <Collapse in={open} timeout="auto" unmountOnExit width='100%' classes={{ root: classes.root }}>
                        <Container display='flex' flexDirection='row' justifyContent='center' alignItems='center' width='100%' margin='1rem 0'>
                            <Container display='flex' flexDirection='column' width='50%' alignItems='center' >
                                <Container><Link href={`/shop`} ><a>Shop</a></Link></Container>
                                <Container><Link href={`/`} ><a>Home</a></Link></Container>
                                <Container>Blog</Container>
                            </Container>
                            <Container display='flex' flexDirection='column' width='50%' alignItems='center' >
                                <Container>About</Container>
                                <Container>Contact</Container>
                                <Container>Cart</Container>
                            </Container>

                        </Container>
                    </Collapse>
                </Container >


                :

                <React.Fragment>
                    <Container id='mainNav' width='100%' color='black' display='flex' padding='.5rem' borderBottom='2px solid #CBB682'>
                        <div className={classes.logo}></div>
                        <div className={classes.nav}>
                            <ul className={classes.list}>
                                <li><Link href={`/`} ><a className={onPage === 'home' ? classes.activeItem : ''}>Home</a></Link></li>
                                <li onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} id="shop">
                                    <Link href={`/shop`} ><a className={onPage === 'shop' ? classes.activeItem : ''} onClick={handleOnClick}>Shop</a></Link>
                                </li>
                                <li className={onPage === 'blog' ? classes.activeItem : ''}>Blog</li>
                                <li className={onPage === 'about' ? classes.activeItem : ''}>About</li>
                                <li className={onPage === 'contact' ? classes.activeItem : ''}>
                                    <Link href={`/contact`} ><a className={onPage === 'contact' ? classes.activeItem : ''}>
                                        Contact
                                    </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.icons}>
                            <Link href={`/cart`} ><a><CartBadge cartLength={cart?.lines?.edges.length} /></a></Link>
                        </div>
                    </Container>
                    {open && <div className={classes.expandedMenu} onMouseOver={handleMenuIn} onMouseOut={handleMouseOut}>
                        <Container display='flex' width='50%' flexWrap='wrap' flexDirection='column'>
                            {collectionList ? collectionList.map(item => (
                                <div className={classes.collectionItem} key={item.node.handle}><Link href={`/shop/collection/${item.node.handle}`} >
                                    <a onClick={handleOnClick}>{item.node.title}</a></Link>
                                </div>
                            ))
                                : <h1>loading</h1>}

                            {
                                //TODO add loading component
                            }
                        </Container>
                        <div className={classes.featuredCollections}>

                        </div>
                    </div>
                    }
                </React.Fragment>
            }
        </React.Fragment >
    );
}

export default MainNav;


