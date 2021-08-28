import React from 'react';
import axios from 'axios'

function SingleProject({ project }) {

    return (
        <div>
            <h1>single Project</h1>

        </div>
    );
}

export default SingleProject;

export const getServerSideProps = async ({ query: { id } }) => {
    const res = await axios.get(`http://localhost:3000/api/projects/${id}`)
    const { data } = await res.data
    return { props: { project: data, loading: false } }
}