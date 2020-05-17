import React from 'react'
import GoalShowPage from './GoalShowPage'
import { Route } from 'react-router'
import Task from './Task'
import Goal from './Goal'

export default function AllGoals(props) {


    const renderGoals = () => {
        return props.loggedinUserGoals.map(goal => {
            return <Goal handleGoalClick={props.handleGoalClick} id={goal.id} name={goal.goal_name} key={goal.id}/>
        })
    }
    return (
        <div>
            {renderGoals()}
            <Goal />
            
            <Task />
        </div>
    )
}
