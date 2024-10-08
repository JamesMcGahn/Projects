import React from 'react';

import MiniProductCard from '../../components/cards/MiniProductCard'
import Container from '../../components/layout/Container'
import MainButton from '../../components/ui/MainButton'
import Link from 'next/link'
import PageTitle from '../ui/PageTitle'

function ProductGrid({ products, title, hasMoreItems, getMoreItems, }) {

    return (
        <Container width='100%' padding='1rem' display='flex' flexDirection='column'  >
            <PageTitle title={title} />
            <Container width='100%' display='flex' flexDirection='row' flexWrap='wrap' >
                {products.map((item, index) => {
                    return (
                        <Container display='block' width='25%' xsWidth="100%" smWidth="50%" mdWidth='33%' padding='1rem' key={index}>
                            <Link href={`/shop/product/${item.node.handle}`}>
                                <a>
                                    <MiniProductCard item={item} />
                                </a>
                            </Link>
                        </Container>
                    )
                }
                )
                }
            </Container>
            <Container display='flex' justifyContent='center' margin="2rem 0" width='100%'>
                <Container width='30%'>
                    {hasMoreItems ? <MainButton backgroundColor='black' color='white' width='100%' onClick={() => getMoreItems()}>Load More</MainButton> : null}
                </Container>
            </Container>
        </Container>
    );
}

export default ProductGrid;