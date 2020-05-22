import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class SignIn extends Component {

    render() {
        
        return (
            <Form onSubmit={this.props.handlesubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" name={'username'} value={this.props.username} onChange={this.props.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name={'password'} value={this.props.password} onChange={this.props.handleChange} />
                </Form.Group>
                <Form.Text className="text-muted">
                    Not registered? <Link to='/signup' href="#">Create an account</Link>
                </Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

