import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Calendar, momentLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default class BigCalendar extends Component {

    state = {
        events: []
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
                    title: goal.goal_name,
                    backgroundColor:`rgb(${goal.red},${goal.green},${goal.blue})`
                }
                this.setState({
                    events: [...this.state.events, newEvent]
                })
            });
        })
        
    }

    render() {
        return (
            <Container>
                <Row >
                    <Col>
                        <Calendar
                            localizer={localizer}
                            defaultDate={new Date()}
                            defaultView="month"
                            events={this.state.events}
                            style={{ height: "100vh", backgroundColor: 'white' }}
                            eventPropGetter={event => ({
                                style: {
                                    backgroundColor: event.backgroundColor
                                }
                            })}
                        />                        
                    </Col>
                </Row>
            </Container>
        )
    }
}
