import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
function DashboardProjectTable({ projects, handleDelete }) {
    const handleModalDelete = (id, title) => {
        handleDelete(id, title)
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Stack</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(project => (
                    <tr>
                        <td><Link href={`/projects/${project._id}`}>{project.title}</Link></td>
                        <td>Tech: {project.stack?.map((tech, i) => `${tech},`)}</td>
                        <td>Otto</td>
                        <td> <Button variant="danger" onClick={() => handleModalDelete(project._id, project.title)}>
                            Delete
                        </Button>
                            <Button variant="primary">
                                <Link href={`/projects/${project._id}/edit`}>Edit</Link>
                            </Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default DashboardProjectTable;

