import React from 'react'
import {Form, Button, Container, Row, Col, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function SignIn(props) {
    
    return (
        <Container style={{backgroundColor: '#333', color: 'white', padding: '3%'}}>
            <Row style={{marginBottom: "3%"}}>
                <Col sm={4} style={{textAlign: "center"}}>   
                <Image style={{height: "200px", width: "200px"}} src="wilson.png" rounded />
                </Col>

                <Col sm={8} style={{margin: 'auto 0'}}>
                    <h1>Welcome to <span style={{color: 'rgb(214, 17, 18)'}}>Wilson</span></h1>
                    <h3>Get Off Your Island!</h3>
                    <p>A simple app to keep track of your goals, tasks, and resources... all in one place.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={props.handleSubmit} >
                        <Form.Group controlId="username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" name={'username'} value={props.username} onChange={props.handleUsernameChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name={'password'} value={props.password} onChange={props.handlePasswordChange} />
                        </Form.Group>
                        <Form.Text className="text-muted">
                            Not registered? <Link to='/signup' href="#">Create an account</Link>
                        </Form.Text>
                        <Button variant="secondary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
    
}


{/* <Jumbotron style={{backgroundColor: '#333', color: 'white', display: 'inline-block', width: '100%'}}>
<img
    alt=""
    src="wilson.png"
    width="200"
    height="200"
    className="d-inline-block align-top"
    style={{verticalAlign: 'middle', textAlign: 'center', float: 'left', marginRight: '70px'}}
/>

<p>
</p>
</Jumbotron>
</Col>
</Row>
<Row>
<Col md={{ span: 6, offset: 3}} style={{backgroundColor: '#333', color: 'white', padding: '15px', borderRadius: '5px', }}>
<Form onSubmit={props.handleSubmit} >
<Form.Group controlId="username">
<Form.Label>Username:</Form.Label>
<Form.Control type="username" placeholder="Enter username" name={'username'} value={props.username} onChange={props.handleUsernameChange} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" name={'password'} value={props.password} onChange={props.handlePasswordChange} />
</Form.Group>
<Form.Text className="text-muted">
Not registered? <Link to='/signup' href="#">Create an account</Link>
</Form.Text>
<Button variant="secondary" type="submit">Submit</Button>
</Form> */}
