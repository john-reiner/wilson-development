import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

function NewGoal(props) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const handleNameChange = e => setName(e.target.value)
    const handleDescriptionChange = e => setDescription(e.target.value)
    const handleDateChange = e => setDate(e.target.value) 
    
    const onSubmit = e => {
        e.preventDefault()
        if (name !== '' && description !== '' && date !== '') {
            fetch("https://wilson-backend.herokuapp.com/api/v1/goals", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: props.loggedinUser.id,
                    goal_name: name,
                    goal_description: description,
                    date: date,
                    rgb: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
                })
            })
            props.history.push('/today')
        } else {
            alert('Feilds are empty')
        }
    }


    return (
        <Container style={{backgroundColor: '#333', color: 'white', padding: '10px', borderRadius: '5px'}}>
            <Row>
                <Col>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Goal Name" name="name" value={name} onChange={handleNameChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Goal Description</Form.Label>
                            <Form.Control as="textarea" rows="3" name="description" value={description} onChange={handleDescriptionChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Goal Date</Form.Label>
                            <br></br>
                            <input type="date" name="date" value={date} onChange={handleDateChange}/>
                        </Form.Group>

                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default withRouter(NewGoal);