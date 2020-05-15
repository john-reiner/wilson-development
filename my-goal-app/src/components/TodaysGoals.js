import React from 'react'
import Goal from './Goal'

export default function TodaysGoals(props) {

    const renderGoals = () => {
        return props.loggedinUserGoals.map(goal => {
            
            return <Goal name={goal.goal_name} />
        })
    }

    return (
        <div>
            {renderGoals()}
        </div>
    )
}
