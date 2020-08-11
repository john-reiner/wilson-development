import React from 'react'
import {Card, Button, ProgressBar} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";


export default function Goal(props) {
    
    let calcDaysFromToday = (date) => {
        let today = new Date()
        let dayToCalc = new Date(date)
        return (dayToCalc - today) / 1000 / 60 / 60 / 24
    }

    return (
        <div style={{ padding: '10px'}}>
            <Card style={{color: 'black', width: '254px', height:'260px'}} onClick={() => props.handleGoalClick(props.id)}>
                <Card.Img variant="top" as='div' style={{ backgroundColor: `rgb(${props.red},${props.green},${props.blue})`, width: '254px', height: '50px' }} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <ProgressBar animated now={45} />
                    </Card.Text>
                        {props.taskModalOpen && props.resourceModalOpen ? <Button variant="primary" onClick={props.taskModalOpen}>Add Task</Button> : null}
                        {/* {props.resourceModalOpen ? <Button variant="primary" onClick={props.resourceModalOpen}>Add Resource</Button> : null} */}
                    <LinkContainer to="goal_showpage">
                        <Button variant="danger" style={{float: 'right'}}>
                            Show
                        </Button>
                    </LinkContainer>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Due in {Math.ceil(calcDaysFromToday(props.date))} days</small>
                </Card.Footer>
            </Card>
        </div>
    )
}
