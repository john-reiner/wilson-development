import React from 'react'
import { Route } from 'react-router'
import DeleteGoal from './DeleteGoal';
import Today from './Today'
import BigCalendar from './BigCalendar'
import AllGoals from './AllGoals'
import NewTask from './NewTask'
import NewResource from './NewResource'

export default function MainBody(props) {
    return (
        <div className="main-body">
            <DeleteGoal completeGoal={props.completeGoal} completedGoal={props.completedGoal} show={props.deleteModalShow} onHide={props.deleteModalClose}  />
            <NewTask show={props.taskModalShow} onHide={props.taskModalClose} clickedGoalid={props.clickedGoalid} />
            <NewResource show={props.resourceModalShow} onHide={props.resourceModalClose}  clickedGoalid={props.clickedGoalid} />
            <Route exact path="/today" render={() => <Today resourceModalOpen={props.resourceModalOpen} taskModalOpen={props.taskModalOpen} loggedinUser={props.loggedinUser} completeTask={props.completeTask} completeTaskids={props.completeTaskids} handleGoalClick={props.handleGoalClick}/>} />
            <Route exact path="/calendar" render={() => <BigCalendar loggedinUser={props.loggedinUser} />} />
            <Route exact path="/goals" render={() => <AllGoals loggedinUser={props.loggedinUser} handleGoalClick={props.handleGoalClick}/>} />
        </div>
    )
}
