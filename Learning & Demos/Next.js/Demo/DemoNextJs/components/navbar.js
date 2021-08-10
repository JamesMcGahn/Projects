import Link from "next/link"

const Navbar = () => (
    < div >
        <h1>Posts App</h1>
        <Link href='/' ><a>Home</a></Link>
        <Link href='/about' ><a>About</a></Link>
    </div >
)

export default Navbar

