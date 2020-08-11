import React from 'react'
import {ListGroup} from 'react-bootstrap'

export default function Task(props) {
    return (
        <ListGroup.Item style={{borderRadius: '5px', color: "black", textDecoration: props.completeTaskids.includes(props.id) ? 'line-through' : '', backgroundColor: props.rgb, margin: '10px'}} onClick={() => props.completeTask(props.id)}>
            <div style={{userSelect: "none", color: "black", backgroundColor: 'whitesmoke', padding: '4px', borderRadius: '5px', textAlign: 'center'}}>{props.name}</div>
        </ListGroup.Item>
    )
}