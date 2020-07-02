import React, { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function BigCalendar(props) {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/users/${props.loggedinUser.id}`)
        .then(response => response.json())
        .then(user => {
                let userEvents = []
                user.goals.forEach(goal => {
                    let newEvent = {
                        start: moment(goal.date).toDate(),
                        end: moment(goal.date)
                            .add(0, 'days')
                            .toDate(),
                        title: goal.goal_name,
                        backgroundColor:`rgb(${goal.red},${goal.green},${goal.blue})`
                    }
                    userEvents.push(newEvent)
                });
            setEvents(userEvents)
        })
    }, [])

    return (
        <Container>
            <Row >
                <Col>
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={events}
                        style={{ height: "100vh", backgroundColor: 'white' }}
                        eventPropGetter={event => ({
                            style: {backgroundColor: event.backgroundColor}
                        })}
                    />                        
                </Col>
            </Row>
        </Container>
    )
}