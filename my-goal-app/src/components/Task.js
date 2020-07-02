import React from 'react'
import {ListGroup} from 'react-bootstrap'

export default function Task(props) {

    return (
        <ListGroup.Item style={{textDecoration: props.completeTaskids.includes(props.id) ? 'line-through' : '', backgroundColor: props.rgb}} onClick={() => props.completeTask(props.id)}>
            <div style={{backgroundColor: 'whitesmoke', padding: '4px', borderRadius: '5px', textAlign: 'center'}}>{props.name}</div>
        </ListGroup.Item>
    )
}