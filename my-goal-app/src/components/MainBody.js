import React from 'react'
import Today from './Today'
import Calendar from './Calendar'
import AllGoals from './AllGoals'

export default function MainBody() {
    return (
        <div>
            This is the MainBody
            <Today />
            <Calendar />
            <AllGoals />
        </div>
    )
}
