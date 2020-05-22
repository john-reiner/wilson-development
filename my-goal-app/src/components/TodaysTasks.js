import React from 'react';
import Task from './Task'
import {ListGroup} from 'react-bootstrap'

export default function TodaysTasks(props) {

    const renderTasks = () => {
        if (props.tasks.length > 0) {
            return props.tasks.map(task => {
                return <Task id={task.id} completeTask={props.completeTask} completeTaskids={props.completeTaskids} name={task.name} description={task.description} key={task.id}/>
            })
        }
    }

    return (
        <ListGroup>
            {renderTasks()}
        </ListGroup>
    )
}
            {/* <h2>Tasks</h2>
            <ul>
                
            </ul> */}