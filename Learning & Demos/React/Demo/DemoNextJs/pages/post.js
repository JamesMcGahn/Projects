import axios from 'axios'

const Post = ({ comments, query }) => {
    return <ul>

        <h1>Comments for Post {query.id} </h1>
        {comments.map(comment =>
            <li key={comment.id}>
                <h5>{comment.name}</h5>
                <p>{comment.body}</p>
                <p> - {comment.email}</p>

            </li>)}
    </ul>
}

Post.getInitialProps = async ({ query }) => {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
    const { data } = res
    return { comments: data, query: query }
}

export default Post



// import { withRouter } from 'next/router';
// // withrouter get query string
// const Post = (props) => {

//     return <h1>{props.router.query.id}</h1>


// }

// export default withRouter(Post)