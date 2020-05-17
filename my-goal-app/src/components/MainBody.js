import React from 'react'
import { Route } from 'react-router'

import Today from './Today'
import BigCalendar from './BigCalendar'
import AllGoals from './AllGoals'



export default function MainBody(props) {
    return (
        <div>
            {/* This is the MainBody */}
            <Route exact path="/today" render={() => <Today loggedinUserGoals={props.loggedinUserGoals} handleGoalClick={props.handleGoalClick}/>} />
            <Route exact path="/calendar" render={() => <BigCalendar />} />
            <Route exact path="/goals" render={() => <AllGoals loggedinUserGoals={props.loggedinUserGoals} handleGoalClick={props.handleGoalClick}/>} />
        </div>
    )
}
