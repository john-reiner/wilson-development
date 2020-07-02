import React, { useState } from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

export default function NewResource(props) {

    const [resource, setResource] = useState({})
    // state = {
    //     name: '',
    //     description: '',
    //     url: '',
    // }

    const handleChange = e => {
        setResource({[e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault()
        if (resource.name !== '' && resource.description !== '') {
            fetch("http://localhost:3000/api/v1/goal_resources", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    goal_id: props.clickedGoalid,
                    name: resource.name,
                    description: resource.description,
                    url: resource.url
                })
            })
            .then(response => response.json())
            .then(resource => {
                props.getNewResourceId(resource.data.id)
            })
            setResource({name: '', description:'', url: ''})
        } else {
            alert('Feilds are empty')
        }
    }
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
            <Modal.Title>New Resource</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group >
                        <Form.Label>Resource Name:</Form.Label>
                        <Form.Control type="text" placeholder="Required" name={'name'} value={resource.name} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Optional" name={'description'} value={resource.description} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>URL:</Form.Label>
                        <Form.Control type="text" placeholder="Required" name={'url'} value={resource.url} onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={props.onHide}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}