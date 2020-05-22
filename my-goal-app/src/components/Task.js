import React from 'react'
import {ListGroup} from 'react-bootstrap'

export default function Task(props) {
    return (
        <ListGroup.Item style={{textDecoration: props.completeTaskids.includes(props.id) ? 'line-through' : ''}} onClick={() => props.completeTask(props.id)}>
            {props.name}
            
        </ListGroup.Item>
    )
}