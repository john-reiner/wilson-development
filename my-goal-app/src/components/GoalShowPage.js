import React from 'react'
import Task from './Task'

export default function GoalShowPage(props) {

    const renderTasks = () => {
        return props.loggedinUserGoals.map(goal => {
            return goal.tasks.map(task => {
                return <Task name={task.name} key={task.id} />
            });
        })
    }

    return (
        <div>
            GOAL
            <p>{props.clickedGoal.goal_name}</p>
            TASKS
            {renderTasks()}
        </div>
    )
}