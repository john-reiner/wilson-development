import React, { Component } from 'react'
import {Form, Button, Jumbotron, Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class SignIn extends Component {

    render() {
        
        return (
            <Container >
                <Row>
                    <Col lg={12} >   
                        <Jumbotron style={{backgroundColor: '#333', color: 'white', display: 'inline-block', width: '100%'}}>
                                <img
                                alt=""
                                src="wilson.png"
                                width="200"
                                height="200"
                                className="d-inline-block align-top"
                                style={{verticalAlign: 'middle', textAlign: 'center', float: 'left', marginRight: '70px'}}
                            />
                            <h1>Welcome to <span style={{color: 'rgb(214, 17, 18)'}}>Wilson</span></h1>
                            <h3>Get Off Your Island!</h3>
                            <p>
                                A simple app to keep track of your goals, tasks, and resources... all in one place.
                            </p>
                            <p>
                                <Button variant="secondary">Login</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3}} style={{backgroundColor: '#333', color: 'white', padding: '15px', borderRadius: '5px', }}>
                        <Form onSubmit={this.props.handlesubmit} >
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
                            {/* <LinkContainer to='/today'> */}
                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                            {/* </LinkContainer> */}
                        </Form>
                    </Col>
                </Row>

            </Container>
        )
    }
}

