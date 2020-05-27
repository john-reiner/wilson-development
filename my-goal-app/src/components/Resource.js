import React from 'react'
import { Card } from 'react-bootstrap'

export default function Resource(props) {
    return (
        <Card>
            <Card.Body>
            <Card.Text>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <a>{props.url}</a>
            </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={props.url}/>
        </Card>
    )
}
