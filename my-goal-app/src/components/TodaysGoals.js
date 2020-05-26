import React from 'react'
import Goal from './Goal'

export default function TodaysGoals(props){

    let renderGoals = () => {
        if (props.goals.length > 1) {
            return props.goals.map(goal => {
                return <Goal resourceModalOpen={props.resourceModalOpen} taskModalOpen={props.taskModalOpen}  red={goal.red} green={goal.green} blue={goal.blue} id={goal.id} handleGoalClick={props.handleGoalClick} name={goal.goal_name} key={goal.id} />
            })
        }
    }

    return (
        <div>
            {renderGoals()}
        </div>
    )
}
