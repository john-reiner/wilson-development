import React, { useState } from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { withRouter } from 'react-router-dom';


function SignUp(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const handleUsernameChange = e => setUsername(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    const handleConfirmedPasswordChange = e => setConfirmedPassword(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        if (password === confirmedPassword && password !== '') {
            fetch("https://wilson-backend.herokuapp.com/api/v1/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
            props.history.push('/')
        } else {
            alert('Passwords are empty or do not match!')
        }
    }

    return (
        <Container style={{backgroundColor: '#333', color: 'white', padding: '3%'}}>
            <Row>
                <Col>
                    <Form onSubmit={onSubmit}>
                    
                        <Form.Group >
                            <Form.Label>Create Username:</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Re-enter password:</Form.Label>
                            <Form.Control type="password" placeholder="Re-enter password" value={confirmedPassword} onChange={handleConfirmedPasswordChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(SignUp);