import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import TodaysGoals from './TodaysGoals'
import TodaysTasks from './TodaysTasks'
import TodaysResources from './TodaysResources'

export default function Today(props) {

    const [tasks, setTasks] = useState([])
    const [goals, setGoals] = useState([])
    const [resources, setResources] = useState([])

    const updateTasks = () => {
        fetch(`http://localhost:3000/api/v1/users/${props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => {
            let tasks = []
            user.goals.forEach(goal => {
                if (goal.tasks.length > 0 && !goal.is_complete) {
                    let rgb = `rgb(${goal.red},${goal.green},${goal.blue})`
                    goal.tasks.forEach(task => {
                        task.rgb = rgb
                        tasks.push(task)
                    })
                }
            });
            setTasks(tasks)
        })
    }
    const updateGoals = () => {
        fetch(`http://localhost:3000/api/v1/users/${props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => setGoals(user.goals.filter(goal => !goal.is_complete)))        
    }

    const updateResources = () => {
        fetch(`http://localhost:3000/api/v1/users/${props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => {
            let resources = []
            user.goals.forEach(goal => {
                if (goal.goal_resources.length > 0 && !goal.is_complete) {
                    goal.goal_resources.forEach(resource => {
                        resources.push(resource)
                    })
                }
            });
            setResources(resources)
        })
    }
    useEffect(() => {
        updateTasks()
        updateGoals()
        updateResources()
    }, [])


    useEffect(() => {
        updateTasks()
        updateGoals()
        updateResources()
    }, [props.confirmedCompletedGoal])
    
    useEffect(() => {
        updateTasks()
    }, [props.newTaskId])

    useEffect(() => {
        updateResources()
    }, [props.newResourceId])

        return (
            <Container >
                <Row>
                    <Col style={{margin: '10px'}}>
                            <LinkContainer to='/add_goal'>
                                <Button variant="secondary" size="lg" block style={{width: '50%'}}>
                                    Add A Goal
                                </Button>
                            </LinkContainer>
                        </Col>
                </Row>
                <Row style={{backgroundColor: '#333', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '30px'}}>
                    <Col><h2>Tasks</h2></Col>
                    <Col xs={6}> <h2>Resources</h2></Col>
                    <Col><h2>Goals</h2></Col>
                </Row>
                <Row style={{backgroundColor: '#333',  padding: '20px', borderRadius: '5px', height: '70vh', overflow: 'hidden'}}>

                    <Col> <TodaysTasks completeTask={props.completeTask} completeTaskids={props.completeTaskids} tasks={tasks}/></Col>
                    <Col xs={6}> <TodaysResources loggedinUser={props.loggedinUser} resources={resources} /> </Col>
                    <Col> <TodaysGoals resourceModalOpen={props.resourceModalOpen} taskModalOpen={props.taskModalOpen} goals={goals} loggedinUser={props.loggedinUser} handleGoalClick={props.handleGoalClick}/> </Col>
                </Row>
            </Container>
        )
}