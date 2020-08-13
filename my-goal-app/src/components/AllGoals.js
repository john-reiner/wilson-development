import React, { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
// import { LinkContainer } from "react-router-bootstrap";
import Goal from './Goal'

export default function AllGoals(props) {

    const [goals, setGoals] = useState([])

    useEffect(() => {
        fetch(`https://wilson-backend.herokuapp.com/api/v1/users/${props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => setGoals(user.goals))
    }, [])

    const renderCompletedGoals = () => {
        if (goals.length > 0) {
            return goals.map(goal => {
                if (goal.is_complete) {
                    return <Goal tasks={goal.tasks} rgb={goal.rgb} description={goal.goal_description} dateComplete={goal.date_completed} complete={goal.is_complete} id={goal.id} handleGoalClick={props.handleGoalClick} name={goal.goal_name} key={goal.id} />
                }
            })
        }
    }
    
    return (
        <Container fluid style={{backgroundColor: '#333', color: 'white', padding: '1%', minHeight: "80vh", width: "100%"}}>
            
            <Row>
                <Col>
                    <h2>Completed</h2>
                </Col>
            </Row>
            <Row>
                <Col style={{display: "flex", flexWrap: "wrap"}}>
                    {renderCompletedGoals()}
                </Col>
            </Row>
        </Container>
    )        
    
}