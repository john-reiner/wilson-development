import React, { Component } from 'react'
import {Container, Row, Button, Col, CardDeck} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import Goal from './Goal'

export default class AllGoals extends Component {

    state = {
        goals: []
    }

    renderGoals = () => {
        if (this.state.goals.length > 0) {
            return this.state.goals.map(goal => {
                if (!goal.is_complete) {
                    return <Goal red={goal.red} green={goal.green} blue={goal.blue} description={goal.goal_description} date={goal.date} complete={goal.is_complete} id={goal.id} handleGoalClick={this.props.handleGoalClick} name={goal.goal_name} key={goal.id} />
                }
            })
        }
    }

    renderCompletedGoals = () => {
        if (this.state.goals.length > 0) {
            return this.state.goals.map(goal => {
                if (goal.is_complete) {
                    return <Goal red={goal.red} green={goal.green} blue={goal.blue} description={goal.goal_description} date={goal.date} complete={goal.is_complete} id={goal.id} handleGoalClick={this.props.handleGoalClick} name={goal.goal_name} key={goal.id} />
                }
            })
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/api/v1/users/${this.props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => {
            this.setState({goals: user.goals})
        })
    }

    render () {
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
                        {this.renderGoals()}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Completed</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.renderCompletedGoals()}
                    </Col>
                </Row>
            </Container>
        )        
    }
}
            // <Container >
            //     <Row>
            //         <Col>                
            //             <LinkContainer to='/add_goal'>
            //             <Button variant="secondary" size="lg" block style={{width: '50%'}}>
            //                 Add A Goal
            //             </Button>
            //             </LinkContainer>
            //         </Col>
            //     </Row>
            //     <Row style={{backgroundColor: '#333', color: 'white'}}>
            //         <Col style={{display: 'inline-flex', padding: '30px', overflow: 'scroll'}}>
            //             <h2 style={{float: 'top'}}>Pending Goals</h2>
            //             <br></br><br></br>
            //             
            //         </Col>
            //     </Row>
            //     <h2>Completed Goals</h2>
            //     <Row>
            //         {this.renderCompletedGoals()}
            //     </Row>
            // </Container>