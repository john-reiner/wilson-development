import React, { Component } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default class BigCalendar extends Component {

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
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={this.state.events}
                    style={{ height: "100vh" }}
                />
            </div>
        )
    }
}
