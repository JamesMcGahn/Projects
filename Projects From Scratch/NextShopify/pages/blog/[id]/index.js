import React from 'react';
import { client, gql } from '../../../utils/appolloClient'
import { getArticleExcerptsInital, articlesByHandle } from '../../../utils/graphQLQueries'
import Container from '../../../components/layout/Container'
import PageTitle from '../../../components/ui/PageTitle'
import MainButton from '../../../components/ui/MainButton'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../../../components/ui/Loading'
import DefaultErrorPage from 'next/error'

const useStyles = makeStyles((theme) => ({
    image: {
        width: '50%',
        float: 'right',
        margin: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            float: 'none',
            margin: '0'
        }
    },
    title: {
        fontFamily: 'Cinzel Decorative, cursive, arial',
        fontWeight: 'bold',
    }

}));

function SingleBlog({ article, notFound }) {
    const classes = useStyles();
    const router = useRouter()
    const p = article ? article?.content.split('%newline%') : null

    if (router.isFallback) {
        return <Loading />
    }
    // TODO: Not Found Page - 
    if (notFound || !article) {
        return (<>
            <head>
                <meta name="robots" content="noindex" />
            </head>
            <DefaultErrorPage statusCode={404} />
        </>)
    }

    return (
        <Container margin='0' padding='2rem' smpadding='1rem' xsPadding='.5rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' background='#494949' >

            <Container background='#fff' margin='1rem'>
                <Container width='100%' display='flex' flexDirection='column' padding='1.5rem'>
                    <Container width="100">
                        <PageTitle title={article.title} color='black' xsfontSize='1.2rem' />



                        <Container margin='1.5rem 0' width='100%'>
                            <img className={classes.image} src={article.image.originalSrc} />
                            {p.map((art, i) => <p key={i}>{art}</p>)}</Container>

                    </Container>
                    <Container width='15%' smWidth='25%' xsWidth='100%'>

                        <MainButton color='white' backgroundColor='black' width='100%' hoverColor='white' onClick={() => router.back()} >
                            Back To Blog
                        </MainButton>

                    </Container>
                </Container>
            </Container>
        </Container>
    );
}

export default SingleBlog;


export async function getStaticPaths() {
    try {
        const initalArticles = getArticleExcerptsInital(50)

        const { data } = await client.query({
            query: gql`${initalArticles}`,
        });

        const articles = data.articles.edges
        const paths = articles.map((prod) => (
            {
                params: { id: prod.node.handle },
            }
        ))
        return { paths, fallback: true, }
    } catch (e) {
        const paths = []
        return { paths, fallback: true, }
    }
}


export async function getStaticProps(context) {
    try {
        const id = context.params.id
        const articlesByHandleQuery = articlesByHandle(id)
        const { data } = await client.query({
            query: gql`${articlesByHandleQuery}`,
        });
        const article = data.blogs?.edges[0].node.articleByHandle

        return { props: { article: article, id: id, notFound: false }, revalidate: 3600 }
    } catch (e) {
        return { props: { article: false, notFound: true }, revalidate: 3600 }
    }

}
