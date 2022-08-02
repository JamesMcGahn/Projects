import React from 'react';
import Container from '../layout/Container'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        width: '100%',
        minHeight: '15vh',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '2px solid #CBB682',
        backgroundColor: '#494949'
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
            color: 'white'
        },
        [theme.breakpoints.down('sm')]: {
            '& li': {
                fontSize: '1rem'
            },
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem',
            flexDirection: 'column',
            '& li': {
                fontSize: '1rem'
            },
        }
    },
    activeItem: {
        fontWeight: 'bold',
    }


}));


function Footer(props) {
    const classes = useStyles();
    const { pathname } = useRouter()
    const patchMatch = pathname.match(/(?<=\/)[a-z]+(?=\/)|(?<=\/)[a-z]+/)
    const onPage = patchMatch === null ? 'home' : patchMatch[0]
    return (

        <div className={classes.footer}>
            <div></div>
            <div>
                <ul className={classes.list}>
                    <li><Link href={`/`} ><a className={onPage === 'home' ? classes.activeItem : ''}>Home</a></Link></li>
                    <li id="shop">
                        <Link href={`/shop`} ><a className={onPage === 'shop' ? classes.activeItem : ''} >Shop</a></Link>
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
            <div></div>
        </div>


    );
}

export default Footer;