import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import Goal from './Goal'
import Task from './Task'

export default function Today(props) {

    const [tasks, setTasks] = useState([])
    const [goals, setGoals] = useState([])

    const updateTasks = () => {
        fetch(`https://wilson-backend.herokuapp.com/api/v1/users/${props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => {
            let tasks = []
            user.goals.forEach(goal => {
                if (!goal.is_complete) {
                    let rgb = goal.rgb
                    goal.tasks.forEach(task => {
                        task.rgb = rgb
                        tasks.push(task)
                    })
                }
            })
            setTasks(tasks)
        })
    }
    const updateGoals = () => {
        fetch(`https://wilson-backend.herokuapp.com/api/v1/users/${props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => setGoals(user.goals.filter(goal => !goal.is_complete)))        
    }

    // const updateResources = () => {
    //     fetch(`http://localhost:3000/api/v1/users/${props.loggedinUser.id}`)
    //     .then(response => response.json())
    //     .then(user => {
    //         let resources = []
    //         user.goals.forEach(goal => {
    //             if (goal.goal_resources.length > 0 && !goal.is_complete) {
    //                 goal.goal_resources.forEach(resource => {
    //                     resources.push(resource)
    //                 })
    //             }
    //         });
    //         setResources(resources)
    //     })
    // }

    useEffect(() => {
        updateTasks()
        updateGoals()
    }, [])

    useEffect(() => {
        updateGoals()
    }, [props.completeTaskids])

    useEffect(() => {
        updateTasks()
        updateGoals()
    }, [props.confirmedCompletedGoal])
    
    useEffect(() => {
        updateTasks()
    }, [props.newTaskId])

    // useEffect(() => {
    //     updateResources()
    // }, [props.newResourceId])


    let renderGoals = () => {
        if (goals.length > 0) {
            return goals.map(goal => {
                return <Goal completeTaskids={props.completeTaskids} tasks={goal.tasks} resourceModalOpen={props.resourceModalOpen} taskModalOpen={props.taskModalOpen}  rgb={goal.rgb} id={goal.id} handleGoalClick={props.handleGoalClick} description={goal.goal_description} date={goal.date} name={goal.goal_name} key={goal.id} />
            })
        }
    }

    const renderTasks = () => {
        return tasks.map(task => {
            return <Task complete={task.is_complete} rgb={task.rgb} id={task.id} completeTask={props.completeTask} completeTaskids={props.completeTaskids} name={task.name} description={task.description} key={task.id}/>
        })
    }

    return (
        <Container fluid style={{backgroundColor: '#333', color: 'white', padding: '3%', minHeight: "80vh", width: "100%"}}>
            <LinkContainer to='/add_goal'>
                <Button variant="secondary" size="lg" style={{width: '50%'}}>
                    Add A Goal
                </Button>
            </LinkContainer>
            <Row>
                <Col sm={8} >
                    <h2 style={{textAlign: "center"}} >Goals</h2>
                    <hr style={{borderTop: "3px solid white"}}/>
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {renderGoals()}
                    </div>
                    
                </Col>
                <Col sm={4}>
                    <h2 style={{textAlign: "center"}} >Tasks</h2>
                    <hr style={{borderTop: "3px solid white"}}/>
                    {renderTasks()}
                </Col>
            </Row>
        </Container>
    )
}