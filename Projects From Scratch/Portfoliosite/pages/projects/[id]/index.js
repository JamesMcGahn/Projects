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
    const res = await axios.get(`${process.env.SERVER}/api/projects/${id}`)
    const { data } = await res.data
    return { props: { project: data, id: id } }
}