import React, { Component } from 'react'
import Resource from './Resource'
import Task from './Task'
import { Link } from 'react-router-dom'

export default class GoalShowPage extends Component {

    state = {
        goal: null
    }

    renderTasks = () => {
        
        if (this.state.goal !== null) {
            return this.state.goal.tasks.map(task => {
                return <Task key={task.id} completeTask={this.props.completeTask} completeTaskids={this.props.completeTaskids} id={task.id} name={task.name} description={task.description}/>
            })
        }

    }
    renderResources = () => {
        if (this.state.goal !== null) {
            return this.state.goal.goal_resources.map(resource => {
                return <Resource name={resource.name} description={resource.description}/>
            })
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/api/v1/goals/${this.props.clickedGoalid}`)
        .then(response => response.json())
        .then(goal => {
            this.setState({goal})
        })
    }

    
    render() {
        
        return (
            <div>
                GOAL
                <p>{this.state.goal_name}</p>
                <Link to="/add_task"><div>
                    Add a Task
                </div></Link>
                TASKS
                {this.renderTasks()}
                <Link to="/add_resource"><div>
                    Add a Resource
                </div></Link>
                RESOURCES
                {this.renderResources()}
            </div>
        )    
    }


}