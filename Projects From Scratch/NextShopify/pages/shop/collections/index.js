import React from 'react';
import { client, gql } from '../../../utils/appolloClient'
import { allCategories } from '../../../utils/graphQLQueries'
import Container from '../../../components/layout/Container'
import PageTitle from '../../../components/ui/PageTitle'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    itemImg: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    title: {
        margin: '0',
        padding: '3px 0',
        fontSize: '1rem',
    },
    lineItem: {
        margin: '0',
        padding: '3px 0',
        fontSize: '.8rem'
    }
}));


function CollectionsPage({ collections }) {
    const classes = useStyles();
    return (
        <Container minHeight='70vh' margin='0' padding='2rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' background='#1d1d1d' >

            <Container background='#fff' margin='1rem 0' padding='1rem'>
                <PageTitle title='Collections' color='black' />
                <Container width='100%' display='flex' flexDirection='row' flexWrap='wrap' margin='1.5rem 0' >
                    {collections.map((collection, index) => {
                        return (
                            <Container display='block' width='25%' xsWidth="100%" smWidth="50%" mdWidth='33%' padding='1.5rem' key={index}>
                                <Link href={`/shop/collections/${collection.node.handle}`}>
                                    <a>
                                        <Container display='flex' flexDirection='column'>
                                            <Container width='100%' padding='0 1rem' >
                                                <img className={classes.itemImg} src={collection.node.image.originalSrc} alt={collection.node.image.title} />
                                            </Container>
                                        </Container>
                                    </a>
                                </Link>
                            </Container>
                        )
                    })}
                </Container>
            </Container>
        </Container>
    );
}

export default CollectionsPage;

export async function getStaticProps(context) {
    try {
        const allCats = allCategories()
        const categories = await client.query({
            query: gql`${allCats}`
        })
        const collectionsList = categories.data.collections.edges
        const cleanedList = collectionsList.filter(item => !item.node.title.toLowerCase().includes('home'))
        return { props: { collections: cleanedList } }
    } catch (e) {
        console.log(e)
        return { props: { collections: [] } }
    }
}