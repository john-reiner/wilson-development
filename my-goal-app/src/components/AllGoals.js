import React from 'react'
import GoalShowPage from './GoalShowPage'
import Task from './Task'
import Goal from './Goal'

export default function AllGoals() {
    return (
        <div>
            {/* This is AllGoals */}
            <Goal />
            <GoalShowPage />
            <Task />
        </div>
    )
}
