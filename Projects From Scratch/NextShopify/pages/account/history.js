import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext'
import ProductGrid from '../../components/sections/ProductGrid'
import Container from '../../components/layout/Container'
import LoginToSee from '../../components/sections/LoginToSee'

function History(props) {
    const { history } = useContext(UserContext)


    return (
        <Container margin='0' padding='2rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' background='#1d1d1d' >
            {history?.length > 0 ?
                <Container background='#fff'>
                    <ProductGrid title="Recent History" products={history} hasMoreItems={false} getMoreItems={false} />
                </Container>
                :
                <div>
                    <LoginToSee title='Log In To View Your History' message="It doesn't appear that you are logged in. Please Log in to view your orders." />
                </div>
            }
        </Container >
    );
}

export default History;