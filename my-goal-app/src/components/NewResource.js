import React, { Component } from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
// import Dropzone from 'react-dropzone'


export default class NewResource extends Component {
    state = {
        name: '',
        description: '',
        url: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        if (this.state.name !== '' && this.state.description !== '') {
            fetch("http://localhost:3000/api/v1/goal_resources", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    goal_id: this.props.clickedGoalid,
                    name: this.state.name,
                    description: this.state.description,
                    url: this.state.url
                    
                })
            })
        } else {
            alert('Feilds are empty')
        }
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Test Resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group >
                            <Form.Label>Resource Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Task" name={'name'} value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Description:</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter Description" name={'description'} value={this.state.description} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>URL:</Form.Label>
                            <Form.Control type="text" placeholder="Enter URL" name={'url'} value={this.state.url} onChange={this.handleChange} />
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
            // <div>

            //     <form onSubmit={this.onSubmit}>
            //         <label>
            //             Resource Name:
            //             <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            //         </label>
            //         <label>
            //             Resource Description:
            //             <textarea rows="10" cols="50" type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
            //         </label>
            //         <label>
            //             url:
            //             <input type="text" name="url" value={this.state.url} onChange={this.handleChange}/>
            //             <input type="file" id="file" name="file" accept="image/png, image/jpeg" value={this.state.file} onChange={this.handleChange}></input>
            //         </label>

            //         <input type="submit" value="Submit" />
            //     </form> 
            // </div>