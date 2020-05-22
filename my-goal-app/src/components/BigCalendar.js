import React, { Component } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default class BigCalendar extends Component {

    state = {
        events: [
            {
                start: moment('2020-05-23T05:10:00.000').toDate(),
                end: moment('2020-05-23')
                    .add(0, 'days')
                    .toDate(),
                title: "test"
            }
        ]
    };

    componentDidMount = () => {
        fetch(`http://localhost:3000/api/v1/users/${this.props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => {
            user.goals.forEach(goal => {
                let newEvent = {
                    start: moment(goal.date).toDate(),
                    end: moment(goal.date)
                        .add(0, 'days')
                        .toDate(),
                    title: goal.goal_name
                }
                this.setState({
                    events: [...this.state.events, newEvent]
                })
            });
        })
        
    }

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
