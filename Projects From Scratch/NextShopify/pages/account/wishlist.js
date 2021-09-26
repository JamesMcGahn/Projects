import React, { useState, useContext } from 'react';
import Container from '../../components/layout/Container'
import { makeStyles } from '@material-ui/core/styles';
import PageTitle from '../../components/ui/PageTitle'
import { ShopifyContext } from '../../contexts/shopifyContext'
import { UserContext } from '../../contexts/userContext'
import { useSession } from "next-auth/client"
import LoginToSee from '../../components/sections/LoginToSee'

const useStyles = makeStyles((theme) => ({
    lineImage: {
        width: '100%',
    },
    lineItem: {
        display: 'block',
        '& h6': {
            fontSize: '1.2rem',
            margin: '0'
        },
    },
    removeItem: {
        marginLeft: '10px',
        '& span:hover': {
            cursor: 'pointer'
        }
    }
}));


function Wishlist() {
    const classes = useStyles();
    const { addToCart, } = useContext(ShopifyContext)
    const { wishList, removeFromWishList } = useContext(UserContext)
    const [session, loading] = useSession()

    const handleAddToCart = (id) => {
        addToCart(id, 1)
        removeFromWishList(id)
    }

    return (
        <Container margin='0' padding='2rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start'
            alignItems='center' background='#1d1d1d' minHeight='70vh'>
            {session ?
                <Container display='flex' flexDirection='row' smFlexD='column' width="80%" >
                    <Container width="100%" flexDirection="column" padding="1rem" display='flex' smWidth='100%' background='#fff' margin='1rem 0'>
                        <Container>
                            <PageTitle title='Wish List' />
                        </Container>
                        <Container width='100%' flexDirection="column" display='flex'>

                            {wishList?.length > 0 ?
                                wishList.map(line => {
                                    return (
                                        <Container width='100%' flexDirection="column" display='flex' borderBottom="1px solid black" key={line.id}>
                                            <Container display='flex' alignItems="center" padding="0.5rem">
                                                <Container width='15%' >
                                                    <img className={classes.lineImage} src={line.image} alt={line.title} />
                                                </Container>
                                                <Container display='flex' width='60%' flexDirection='column' padding="0 1rem">
                                                    <Container>
                                                        <span className={classes.lineItem}><h6>{line.title}</h6></span>
                                                    </Container>
                                                    <Container>
                                                        <span className={classes.lineItem}>{`Brand: ${line.vendor}`} </span>
                                                        <span className={classes.lineItem}>{`Variant: ${line.variantTitle}`}</span>
                                                    </Container>
                                                </Container>
                                                <Container display='flex' width='25%' padding="0 1rem" justifyContent='flex-end' xsFlexD='column'>
                                                    <Container>
                                                        <span className={classes.lineItem}> {`$${Number(line.price).toFixed(2)}`}</span>
                                                    </Container>
                                                </Container >
                                            </Container>
                                            <Container display='flex' width='100%' justifyContent='flex-end'>

                                                <div className={classes.removeItem} onClick={() => { removeFromWishList(line.id) }}> <span>Remove From WishList</span></div>
                                                <div className={classes.removeItem} onClick={() => { handleAddToCart(line.id) }}> <span>Add To Cart</span></div>
                                            </Container>
                                        </Container>
                                    )
                                })

                                :
                                <Container width='100%' flexDirection="column" display='flex' alignItems='center'><h1>Add some items...</h1></Container >
                            }
                        </Container>
                    </Container>

                </Container>
                :
                <div>
                    <LoginToSee title='Log In To View Your Wishlist' message="It doesn't appear that you are logged in. Please Log in to view your Wishlist." />
                </div>
            }
        </Container>

    )
}

export default Wishlist;


