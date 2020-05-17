import React, { Component } from 'react';
import Task from './Task'

export default class TodaysTasks extends Component {
    
    renderTasks = () => {
        return this.props.loggedinUserGoals.map(goal => {
            return goal.tasks.map(task => {
                return <Task name={task.name} key={task.id} />
            });
        })
    }
    render() {
        return (
            <div>
                {this.renderTasks()}
                <Task />
            </div>
        )
    }

}
