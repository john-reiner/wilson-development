import React, { useState, useEffect } from 'react'
import {Card, Button, ProgressBar} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";


export default function Goal(props) {

    const updateProgress = () => {
        if (props.tasks.length !== 0) {
            let tasksCount =  props.tasks.length
            let completedTaskCount = 0
            props.tasks.forEach(task => {
                if (task.is_complete) {
                    completedTaskCount ++
                }
            })
            return (completedTaskCount / tasksCount) * 100
        } else {
            return 0
        }
    }

    console.log(props)

    let calcDaysFromToday = (date) => {
        let today = new Date()
        let dayToCalc = new Date(date)
        return (dayToCalc - today) / 1000 / 60 / 60 / 24
    }

    function getFormattedDate(d) {
        var date = new Date(d);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        return month + "/" + day + "/" + year;
    }

    return (
        <div style={{ padding: '10px'}}>
            <Card style={{color: 'black', width: '254px', height:'260px'}} onClick={() => props.handleGoalClick(props.id)}>
                <Card.Img variant="top" as='div' style={{ backgroundColor: props.rgb, width: '254px', height: '50px' }} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <ProgressBar animated now={updateProgress()} />
                    </Card.Text>
                        {props.taskModalOpen && props.resourceModalOpen ? <Button variant="primary" onClick={props.taskModalOpen}>Add Task</Button> : null}
                        {/* {props.resourceModalOpen ? <Button variant="primary" onClick={props.resourceModalOpen}>Add Resource</Button> : null} */}
                    <LinkContainer style={{float: 'right'}} to="goal_showpage">
                        <Button variant="danger" >
                            Show
                        </Button>
                    </LinkContainer>
                    </Card.Body>
                    <Card.Footer>
                    {props.dateComplete ? <small>Completed on: {getFormattedDate(props.dateComplete)}</small> : <small className="text-muted">Due in {Math.ceil(calcDaysFromToday(props.date) + 1)} days</small>}
                </Card.Footer>
            </Card>
        </div>
    )
}
