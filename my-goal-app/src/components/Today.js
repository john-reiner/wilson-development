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
                    let rgb = `rgb(${goal.red},${goal.green},${goal.blue})`
                    goal.tasks.forEach(task => {
                        task.rgb = rgb
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

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.confirmedCompletedGoal !== this.props.confirmedCompletedGoal || prevProps.taskModalOpen !== this.props.taskModalShow) {
            fetch(`http://localhost:3000/api/v1/users/${this.props.loggedinUser.id}`)
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
                this.setState({tasks})
            })
            fetch(`http://localhost:3000/api/v1/users/${this.props.loggedinUser.id}`)
            .then(response => response.json())
            .then(user => {
                this.setState({goals: user.goals.filter(goal => !goal.is_complete)})
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
    }


    render() {

        let goals = this.state.goals
        let tasks = this.state.tasks
        let resources = this.state.resources
        return (
            <Container >
                <Row style={{backgroundColor: '#333', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '30px'}}>
                    <Col><h2>Tasks</h2></Col>
                    <Col xs={6}> <h2>Resources</h2></Col>
                    <Col><h2>Goals</h2></Col>
                </Row>
                <Row style={{backgroundColor: '#333',  padding: '20px', borderRadius: '5px', height: '70vh', overflow: 'scroll'}}>
                    <Col> <TodaysTasks completeTask={this.props.completeTask} completeTaskids={this.props.completeTaskids} tasks={tasks}/></Col>
                    <Col xs={6}> <TodaysResources loggedinUser={this.props.loggedinUser} resources={resources} /> </Col>
                    <Col> <TodaysGoals resourceModalOpen={this.props.resourceModalOpen} taskModalOpen={this.props.taskModalOpen} goals={goals} loggedinUser={this.props.loggedinUser} handleGoalClick={this.props.handleGoalClick}/> </Col>
                </Row>
            </Container>
        )
    }
}