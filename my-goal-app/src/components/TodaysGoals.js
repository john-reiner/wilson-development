import React from 'react'
import Goal from './Goal'

export default function TodaysGoals(props){

    let renderGoals = () => {
        if (props.goals.length > 1) {
            return props.goals.map(goal => {
                return <Goal description={goal.goal_description} id={goal.id} handleGoalClick={props.handleGoalClick} name={goal.goal_name} key={goal.id} />
            })
        }
    }

    return (
        <div>

            <h2>Upcoming Goals</h2>

            {renderGoals()}
        </div>
    )
}
