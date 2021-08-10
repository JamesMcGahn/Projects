import Link from "next/link"
import axios from 'axios'
import Navbar from '../components/navbar'

const Index = ({ posts }) => (
    < div >
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/post?id=${post.id}`}><a>{post.title}</a></Link>

                </li>
            ))}
        </ul>
    </div >
)

Index.getInitialProps = async () => {
    //https://jsonplaceholder.typicode.com/posts
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const { data } = res
    return { posts: data }
}

export default Index