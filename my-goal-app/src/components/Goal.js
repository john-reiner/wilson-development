import React from 'react'
import { Link } from 'react-router-dom'

export default function Goal(props) {
    return (
        <Link to="goal_showpage"><div onClick={() => props.handleGoalClick(props.id)} className="goal">
            <p>{props.name}</p>
        </div></Link>
    )
}
