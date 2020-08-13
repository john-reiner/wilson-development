import React, { useState } from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

export default function NewResource(props) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')

    const handleNameChange = e => setName(e.target.value)
    const handleDescriptionChange = e => setDescription(e.target.value)
    const handleUrlChange = e => setUrl(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        if (name !== '' && description !== '') {
            fetch("https://wilson-backend.herokuapp.com/api/v1/goal_resources", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    goal_id: props.clickedGoalid,
                    name: name,
                    description: description,
                    url: url
                })
            })
            .then(response => response.json())
            .then(resource => {
                props.getNewResourceId(resource.data.id)
            })
            setName('')
            setDescription('')
            setUrl('')
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
                        <Form.Control type="text" placeholder="Required" name={'name'} value={name} onChange={handleNameChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Optional" name={'description'} value={description} onChange={handleDescriptionChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>URL:</Form.Label>
                        <Form.Control type="text" placeholder="Required" name={'url'} value={url} onChange={handleUrlChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={props.onHide}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}