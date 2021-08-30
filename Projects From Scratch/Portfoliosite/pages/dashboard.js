import React from 'react';
import { getSession } from 'next-auth/client'
import axios from 'axios'
function dashboard({ session, projects }) {




    return (
        <div>
            <h1>access granted</h1>
        </div>
    );
}

export default dashboard;

export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }

        }
    }
    const res = await axios.get(`${process.env.SERVER}/api/projects/`)
    const { data } = await res.data
    return { props: { session: session, projects: data } }
}
