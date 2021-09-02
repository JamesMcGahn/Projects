import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ProjectForm({ validated, handleSubmit, handleChange, form }) {
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">

                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" name="title" value={form.title} onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">
                    Enter a Title
                </Form.Control.Feedback>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Stack</Form.Label>
                <Form.Control type="text" placeholder="Ex. React, Mongo" name='stack' value={form.stack.toString()} onChange={handleChange} required />
                <Form.Text className="text-muted">
                    Make sure list is comma separated
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Add the Project's Stack
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Description" name="description" value={form.description} onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">
                    Add the Project's Description
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="challenges">
                <Form.Label>Challenges</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="challenges" name="challenges" value={form.challenges} onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">
                    Add the Project's Challenges
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" placeholder="Image Url" name="imageUrl" value={form.imageUrl} onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">
                    Add the Project's Image
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="adtlImg">
                <Form.Label>Additional Image Url's</Form.Label>
                <Form.Control type="text" placeholder="Additional Images" name="adtlImg" value={form.adtlImg} onChange={handleChange} />
                <Form.Text className="text-muted">
                    Make sure list is comma separated
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Add the Project's Image
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="gitUrl">
                <Form.Label>Git Url</Form.Label>
                <Form.Control type="text" placeholder="Git Url" name="gitUrl" value={form.gitUrl} onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">
                    Add the Project's Git URL
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="liveUrl">
                <Form.Label>Live Url</Form.Label>
                <Form.Control type="text" placeholder="Live Url" name="liveUrl" value={form.liveUrl} onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">
                    Add the Project's Live URL
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ProjectForm;