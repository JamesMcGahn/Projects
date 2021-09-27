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
import Loading from '../../../components/ui/Loading'
import { navTitles } from '../../../constants'

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
        boxShadow: '3px 2px 5px rgba(0,0,0, 0.4)',
        animation: 'fadeIn 0.3s ease-in',
    },
    '@global': {
        "@keyframes fadeIn": {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1,
            }
        },
    },
    collectionItem: {
        padding: '.5rem',
        width: '33%'
    },
    collectionTitle: {
        padding: '.5rem',
        '& a': {
            textDecoration: 'underline'
        }

    },
    navCatImages: {
        width: '20%',
        '& img': {
            width: '100%'
        }
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
        }, 500)
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
                                <Container><Link href={`/shop`} ><a onClick={() => setOpen(!open)}>Shop</a></Link></Container>
                                <Container><Link href={`/`} ><a onClick={() => setOpen(!open)}>Home</a></Link></Container>
                                <Container><Link href={`/blog`} ><a onClick={() => setOpen(!open)}>Blog</a></Link></Container>
                            </Container>
                            <Container display='flex' flexDirection='column' width='50%' alignItems='center' >
                                <Container><Link href={`/about`} ><a onClick={() => setOpen(!open)}>About</a></Link></Container>
                                <Container><Link href={`/contact`} ><a onClick={() => setOpen(!open)}>Contact</a></Link></Container>
                                <Container><Link href={`/cart`} ><a onClick={() => setOpen(!open)}>Cart</a></Link></Container>
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
                                <li >
                                    <Link href={`/blog`} >
                                        <a className={onPage === 'blog' ? classes.activeItem : ''}>Blog</a>
                                    </Link>
                                </li>
                                <li className={onPage === 'about' ? classes.activeItem : ''}>
                                    <Link href={`/about`} ><a>
                                        About
                                    </a>
                                    </Link>
                                </li>
                                <li className={onPage === 'contact' ? classes.activeItem : ''}>
                                    <Link href={`/contact`} ><a>
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

                        <Container display='flex' width='50%' flexDirection='column'>
                            <Container display='flex' width='100%' flexDirection='column'>
                                <div className={classes.collectionTitle}><Link href={`/shop/collections/`} >
                                    <a onClick={handleOnClick}>COLLECTIONS</a></Link>
                                </div>
                            </Container>

                            <Container display='flex' width='100%' flexWrap='wrap' flexDirection='row'>
                                {collectionList ? collectionList.map(item => (
                                    <div className={classes.collectionItem} key={item.node.handle}><Link href={`/shop/collections/${item.node.handle}`} >
                                        <a onClick={handleOnClick}>{item.node.title}</a></Link>
                                    </div>
                                ))
                                    : <Loading />}
                            </Container>
                        </Container>
                        <Container display='flex' width='50%' flexDirection='row' justifyContent='space-between' alignItems='center'>
                            {navTitles.map(item => (
                                <div className={classes.navCatImages}>
                                    <Link href={`/shop/collections/${item.alt}`} >
                                        <a onClick={handleOnClick}>
                                            <img src={item.img} alt={item.alt} />
                                        </a>
                                    </Link>
                                </div>
                            ))}
                        </Container>
                    </div>
                    }
                </React.Fragment>
            }
        </React.Fragment >
    );
}

export default MainNav;


