import React, { Component } from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

export default class NewTask extends Component {
    
    state = {
        name: ''
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        if (this.state.name !== '') {
            fetch("http://localhost:3000/api/v1/tasks", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    goal_id: this.props.clickedGoalid,
                    name: this.state.name,
                })
            })
            this.setState({name: ''})
        } else {
            alert('Feilds are empty')
        }
    }

    render() {
        
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                <Modal.Title>New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Task:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Task" name={'task'} value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.props.onHide}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>               
            </Modal>
        )
    }
}