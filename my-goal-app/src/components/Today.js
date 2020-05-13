import React from 'react'
import TodaysTasks from './TodaysTasks'
import TodaysGoals from './TodaysGoals'

export default function Today() {
    return (
        <div>
            This is Today
            <TodaysTasks/>
            <TodaysGoals/>
        </div>
    )
}
