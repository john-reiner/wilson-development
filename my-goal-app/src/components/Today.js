import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import TodaysGoals from './TodaysGoals'
import TodaysTasks from './TodaysTasks'
import TodaysResources from './TodaysResources'


export default class Today extends Component {

    state = {
        tasks: [],
        goals: [],
        resources: [],
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/api/v1/users/${this.props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => {
            this.setState({goals: user.goals.filter(goal => !goal.is_complete)})
        })
        fetch(`http://localhost:3000/api/v1/users/${this.props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => {
            let tasks = []
            user.goals.forEach(goal => {
                if (goal.tasks.length > 0 && !goal.is_complete) {
                    goal.tasks.forEach(task => {
                        tasks.push(task)
                    })
                }
            });
            this.setState({tasks})
        })
        fetch(`http://localhost:3000/api/v1/users/${this.props.loggedinUser.id}`)
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
            this.setState({resources})
        })
    }


    render() {

        let goals = this.state.goals
        let tasks = this.state.tasks
        let resources = this.state.resources
        
        return (
            <Container>
                <Row>
                    <Col> <TodaysTasks completeTask={this.props.completeTask} completeTaskids={this.props.completeTaskids} tasks={tasks}/></Col>
                    <Col xs={6}> <TodaysResources resources={resources} /> </Col>
                    <Col> <TodaysGoals goals={goals} loggedinUser={this.props.loggedinUser} handleGoalClick={this.props.handleGoalClick}/> </Col>
                </Row>
            </Container>
            // <div className="row">
            //     <div className="column">
            //         <TodaysTasks completeTask={this.props.completeTask} completeTaskids={this.props.completeTaskids} tasks={tasks}/>
            //     </div>
            //     <div className="column">
            //         <TodaysResources resources={resources} />
            //     </div>
            //     <div className="column">
            //         <TodaysGoals goals={goals} loggedinUser={this.props.loggedinUser} handleGoalClick={this.props.handleGoalClick}/>
            //     </div>
            // </div>
        )
    }
}