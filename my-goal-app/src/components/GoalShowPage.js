import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap'
import Resource from './Resource'
import Task from './Task'

export default function GoalShowPage(props) {

    const [goal, setGoal] = useState('')

    const renderTasks = () => {
        if (goal !== '') {
            let rgb = goal.rgb
            return goal.tasks.map(task => {
                return <Task rgb={rgb} id={task.id} completeTask={props.completeTask} completeTaskids={props.completeTaskids} name={task.name} description={task.description} key={task.id}/>
            })
        }
    }
    const renderResources = () => {
        if (goal !== '') {
            return goal.goal_resources.map(resource => {
                return <Resource url={resource.url} key={resource.id} name={resource.name} description={resource.description}/>
            })
        }
    }
    useEffect(() => {
        fetch(`https://wilson-backend.herokuapp.com/api/v1/goals/${props.clickedGoalid}`)
        .then(response => response.json())
        .then(goal => setGoal(goal))
    }, [props.newTaskId])

    useEffect(() => {
        fetch(`https://wilson-backend.herokuapp.com/api/v1/goals/${props.clickedGoalid}`)
        .then(response => response.json())
        .then(goal => {setGoal(goal)})
    }, [])

    return (
        <Container fluid style={{backgroundColor: '#333', padding: '50px'}}>
            <Row>
                <Col>
                    <Jumbotron style={{ border: `solid ${goal.rgb} 4px`}}>
                        <h1>{goal.goal_name}</h1>
                        <p>{goal.goal_description}</p>
                        <p>
                            <Button variant="secondary" onClick={props.taskModalOpen}>Add Task</Button>
                            <Button variant="secondary" onClick={props.resourceModalOpen}>Add Resource</Button>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    {renderTasks()}
                </Col>
                <Col>
                    {renderResources()}
                </Col>
            </Row>
        </Container>
    )    
}