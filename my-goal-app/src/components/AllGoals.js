import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Goal from './Goal'

export default class AllGoals extends Component {

    state = {
        goals: []
    }

    renderGoals = () => {
        if (this.state.goals.length > 1) {
            return this.state.goals.map(goal => {
                return <Goal description={goal.goal_description} date={goal.date} complete={goal.is_complete} id={goal.id} handleGoalClick={this.props.handleGoalClick} name={goal.goal_name} key={goal.id} />
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
            <div>
                <Link to="/add_goal"><div>
                    Add a Goal
                </div></Link>
                <Container fluid>
                    <Row>
                        <Col>{this.renderGoals()}</Col>
                    </Row>
                </Container>
                
            </div>
        )        
    }
}
