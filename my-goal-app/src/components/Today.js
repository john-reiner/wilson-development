import React, { Component } from 'react'
import TodaysGoals from './TodaysGoals'
import TodaysTasks from './TodaysTasks'

import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default class Today extends Component {

    state = {
        events: [
            {
            start: moment().toDate(),
            end: moment()
                .add(0, "days")
                .toDate(),
            title: "Some title"
            }
        ]
    };
    render() {
        return (
            <div>
            <TodaysTasks loggedinUserGoals={this.props.loggedinUserGoals}/>
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="day"
                    events={this.state.events}
                    style={{ height: "50vh" }}
                />
            <TodaysGoals loggedinUserGoals={this.props.loggedinUserGoals}/>
            </div>
        )
    }
}

