import React from 'react'
import { Route } from 'react-router'

import Today from './Today'
import BigCalendar from './BigCalendar'
import AllGoals from './AllGoals'



export default function MainBody() {
    return (
        <div>
            {/* This is the MainBody */}
            <Route exact path="/today" render={() => <Today />} />
            <Route exact path="/calendar" render={() => <BigCalendar />} />
            <Route exact path="/goals" render={() => <AllGoals />} />
        </div>
    )
}
