import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import classes from '../../styles/dashBoardProjectTable.module.css'

function DashboardProjectTable({ projects, handleDelete }) {
    const handleModalDelete = (id, title) => {
        handleDelete(id, title, 'project')
    }
    console.log(projects)
    return (
        <Table striped bordered hover>
            <thead>
                <tr className="d-flex">
                    <th className="col-2">Name</th>
                    <th className="col-1">Main Page?</th>
                    <th className="col-3">Description</th>
                    <th className="col-3">Stack</th>
                    <th className="col-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(project => (
                    <tr className="d-flex" key={project._id}>
                        <td className="col-2"><Link href={`/projects/${project._id}`}>{project.title}</Link>
                            <div><Button variant="warning">
                                <Link href={`/projects/${project._id}`}>View</Link>
                            </Button>
                            </div>
                        </td>
                        <td className="col-1">
                            {`${project.mainPage}`}
                        </td>
                        <td className="col-3">{project.subtitle}</td>
                        <td className="col-3">{project.stack?.map((tech, i) => `${tech}, `)}</td>
                        <td className="col-3">
                            <div className={classes.btnDiv}>
                                <Button variant="warning">
                                    <Link href={`/projects/${project._id}/images`}>Images</Link>
                                </Button>
                                <Button variant="danger" onClick={() => handleModalDelete(project._id, project.title)}>
                                    Delete
                                </Button>
                                <Button variant="primary">
                                    <Link href={`/projects/${project._id}/edit`}>Edit</Link>
                                </Button>

                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table >
    );
}

export default DashboardProjectTable;

