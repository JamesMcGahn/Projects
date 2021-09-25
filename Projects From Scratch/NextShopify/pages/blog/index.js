import React, { useState, useEffect } from 'react';
import { client, gql } from '../../utils/appolloClient'
import { getArticleExcerptsInital } from '../../utils/graphQLQueries'
import Container from '../../components/layout/Container'
import axios from 'axios'
import MainButton from '../../components/ui/MainButton'
import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontFamily: 'Cinzel Decorative, cursive, arial',
        fontWeight: 'bold',
    }

}));




function BlogPage({ articles, hasNext }) {
    const matches = useMediaQuery('(max-width:944px)');
    const classes = useStyles();
    const [posts, setPosts] = useState(articles)
    const [fetchMore, setFetchMore] = useState(hasNext)
    const [hasNextPrev, sethasNextPrev] = useState({ next: hasNext, prev: false })
    const [cursor, setCursor] = useState()
    const [pageLocation, setPageLocation] = useState({ min: 0, max: 2 })

    useEffect(() => {
        if (posts) {
            setCursor(posts[posts.length - 1].cursor)
        }
    }, [posts])

    useEffect(() => {
        if (pageLocation.min === 0) {
            sethasNextPrev({ prev: false, next: true })
        } else if (pageLocation.max <= posts.length - 1) {
            sethasNextPrev({ prev: true, next: true })
        } else {
            sethasNextPrev({ prev: true, next: false })
        }
    }, [pageLocation])

    function truncateString(str) {
        if (str.length < 1450) return str
        return `${str.substring(0, 1450)} ...`
    }

    const getPosts = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/blogs/blogs`,
            {
                params: {
                    cursor: cursor
                }
            })
        const { data } = res.data
        setPosts([...posts, ...data.edges])
        setFetchMore(data.pageInfo.hasNextPage)
        setPageLocation({ min: pageLocation.min + 3, max: pageLocation.max + 3 })
    }

    const handleNextClick = () => {
        window.scrollTo(0, 0)
        if ((posts.length - 1) === pageLocation.max && fetchMore) {
            getPosts()
        }
        else {
            setPageLocation({ min: pageLocation.min + 3, max: pageLocation.max + 3 })
        }
    }

    const handlePrevClick = () => {
        window.scrollTo(0, 0)
        if (pageLocation.min === 0) return
        setPageLocation({ min: pageLocation.min - 3, max: pageLocation.max - 3 })
    }

    return (
        <Container padding='2rem'>
            {posts.map((article, index) => {
                const post = article.node
                if (index >= pageLocation.min && index <= pageLocation.max) {
                    const truncated = truncateString(post.content)
                    const p = truncated.split('%newline%')
                    return (
                        <Link href={`/blog/${post.handle}`} passhref key={post.handle}>
                            <a>
                                <Container display="flex" width="100%" margin='0' key={index} smFlexD='column'>
                                    {index % 2 || matches ?
                                        <React.Fragment>
                                            <Container width="50%" smWidth="100%">
                                                <img className={classes.image} src={post.image.originalSrc} />
                                            </Container>
                                            <Container width="50%" padding='1.5rem' smWidth="100%" smPadding='1.5rem'>
                                                <Container width="100%">
                                                    <span className={classes.title}> {post.title} </span>
                                                </Container>
                                                <Container width="100%" >
                                                    {p.map((txt, i) => {
                                                        return <p key={i}>{`${txt}`}</p>
                                                    })
                                                    }
                                                </Container>
                                            </Container>
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <Container width="50%" padding='1.5rem 1.5rem 1.5rem 0' smWidth="100%" smPadding='1.5rem'>
                                                <Container width="100%" margin='0' padding='0'>
                                                    <span className={classes.title}> {post.title} </span>
                                                </Container>
                                                <Container width="100%">
                                                    {p.map((txt, i) => {
                                                        return <p key={i}>{`${txt}`}</p>
                                                    })
                                                    }
                                                </Container>
                                            </Container>
                                            <Container width="50%" smWidth="100%">
                                                <img className={classes.image} src={post.image.originalSrc} />
                                            </Container>
                                        </React.Fragment>
                                    }
                                </Container>
                            </a>
                        </Link>
                    )
                }
            }
            )}

            <Container display="flex" width="100%" margin='1.5rem 0'>
                <Container display="flex" width="100%">
                    {hasNextPrev.prev ? <MainButton color='black' backgroundColor='#CBB682' width='100%' hoverColor='white' onClick={handlePrevClick}> Prev Page</MainButton> : null}
                </Container>
                <Container display="flex" width="100%" justifyContent="flex-end">
                    {hasNextPrev.next ? <MainButton color='black' backgroundColor='#CBB682' width='100%' hoverColor='white' onClick={handleNextClick}> Next Page</MainButton> : null}
                </Container>
            </Container>



        </Container>
    );
}

export default BlogPage;

export async function getStaticProps(context) {
    const initalArticles = getArticleExcerptsInital(3)

    const { data } = await client.query({
        query: gql`${initalArticles}`,
    });

    const articles = data.articles.edges
    const hasNext = data.articles.pageInfo.hasNextPage
    return {
        props: { articles: articles, hasNext: hasNext }
    }
}