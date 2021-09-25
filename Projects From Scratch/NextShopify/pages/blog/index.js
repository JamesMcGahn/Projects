import React, { useState, useEffect } from 'react';
import { client, gql } from '../../utils/appolloClient'
import { getArticleExcerptsInital } from '../../utils/graphQLQueries'
import Container from '../../components/layout/Container'
import axios from 'axios'

function BlogPage({ articles, hasNext }) {
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
        console.log(posts.length - 1, pageLocation.max)
        if ((posts.length - 1) === pageLocation.max && fetchMore) {
            getPosts()
        }
        else {
            setPageLocation({ min: pageLocation.min + 3, max: pageLocation.max + 3 })
            console.log('else')
        }
    }

    const handlePrevClick = () => {
        if (pageLocation.min === 0) return
        setPageLocation({ min: pageLocation.min - 3, max: pageLocation.max - 3 })
    }

    return (
        <Container>
            {posts.map((article, index) => {
                const post = article.node
                if (index >= pageLocation.min && index <= pageLocation.max) {
                    return (
                        <Container>
                            {post.title}
                        </Container>
                    )
                }
            }
            )}
            {hasNextPrev.prev ? <button onClick={handlePrevClick}> Prev Page</button> : null}
            {hasNextPrev.next ? <button onClick={handleNextClick}> Next Page</button> : null}

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