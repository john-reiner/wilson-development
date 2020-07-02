import React, { useState, useEffect } from 'react'
import {Container, Row, Button, Col} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import Goal from './Goal'

export default function AllGoals(props) {

    const [goals, setGoals] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/users/${props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => setGoals(user.goals))
    }, [])

    const renderGoals = () => {
        return goals.map(goal => {
            if (!goal.is_complete) {
                return <Goal resourceModalOpen={props.resourceModalOpen} taskModalOpen={props.taskModalOpen} red={goal.red} green={goal.green} blue={goal.blue} description={goal.goal_description} date={goal.date} complete={goal.is_complete} id={goal.id} handleGoalClick={props.handleGoalClick} name={goal.goal_name} key={goal.id} />
            }
        })
    }

    const renderCompletedGoals = () => {
        if (goals.length > 0) {
            return goals.map(goal => {
                if (goal.is_complete) {
                    return <Goal red={goal.red} green={goal.green} blue={goal.blue} description={goal.goal_description} date={goal.date} complete={goal.is_complete} id={goal.id} handleGoalClick={props.handleGoalClick} name={goal.goal_name} key={goal.id} />
                }
            })
        }
    }
    
    return (
        <Container style={{backgroundColor: '#333', color: 'white', borderRadius: '5px'}}>
            <Row>
                <Col style={{margin: '10px'}}>
                    <LinkContainer to='/add_goal'>
                        <Button variant="secondary" size="lg" block style={{width: '50%'}}>
                            Add A Goal
                        </Button>
                    </LinkContainer>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Goals</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {renderGoals()}
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Completed</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {renderCompletedGoals()}
                </Col>
            </Row>
        </Container>
    )        
    
}