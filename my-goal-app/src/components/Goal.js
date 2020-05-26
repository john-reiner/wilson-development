import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";


export default function Goal(props) {
    return (
        <Card style={{ width: '254px', height:'250px', flex: 1}} onClick={() => props.handleGoalClick(props.id)}>
            <Card.Img variant="top" as='div' style={{ backgroundColor: `rgb(${props.red},${props.green},${props.blue})`, width: '254px', height: '50px' }} />
            <Card.Body>
                <Card.Title style={{color: 'black'}}>{props.name}</Card.Title>
                <Button variant="primary" onClick={props.taskModalOpen}>
            Add Task
        </Button>

        <Button variant="primary" onClick={props.resourceModalOpen}>
            Add Resource
        </Button>
        <LinkContainer to="goal_showpage">
        <Button variant="danger">
            Show
        </Button>
        </LinkContainer>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.date}</small>
            </Card.Footer>
        </Card>
    )
}