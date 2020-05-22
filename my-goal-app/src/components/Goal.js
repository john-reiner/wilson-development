import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom'

export default function Goal(props) {
    return (

        <LinkContainer to="/goal_showpage">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <LinkContainer to="/add_task">
                        <Card.Link >Add Task</Card.Link>
                    </LinkContainer>
                    <LinkContainer to='/add_resource'>
                        <Card.Link >Add Resource</Card.Link>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </LinkContainer>
    )
}