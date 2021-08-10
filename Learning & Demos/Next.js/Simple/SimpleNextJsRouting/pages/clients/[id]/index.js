import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'


function index(props) {
    const router = useRouter()
    function loadProject() {
        router.push('/clients/cheese/1')
        // router.replace('path') cant go back after navigation
    }

    return (
        <div>
            <h1>the projects of client</h1>
            <Link href='/clients/cheese'>Cheese</Link>
            {/* <Link href={{
                pathname: '/clients/[id]',
                query: {id: client.id}
            }}>Cheese</Link> */}
            <button onClick={loadProject}>Go to this project</button>
        </div>
    );
}

export default index;