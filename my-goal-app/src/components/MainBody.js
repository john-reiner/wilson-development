import React, { Component } from 'react'
import { Route } from 'react-router'
import DeleteGoal from './DeleteGoal';
import Today from './Today'
import BigCalendar from './BigCalendar'
import AllGoals from './AllGoals'
import NewTask from './NewTask'
import NewResource from './NewResource'

export default class MainBody extends Component {

    render() {
        return (
            <div className="main-body">
                <DeleteGoal completeGoal={this.props.completeGoal} completedGoal={this.props.completedGoal} show={this.props.deleteModalShow} onHide={this.props.deleteModalClose}  />
                <NewTask  getNewTaskId={this.props.getNewTaskId} show={this.props.taskModalShow} onHide={this.props.taskModalClose} clickedGoalid={this.props.clickedGoalid} />
                <NewResource getNewResourceId={this.props.getNewResourceId} show={this.props.resourceModalShow} onHide={this.props.resourceModalClose}  clickedGoalid={this.props.clickedGoalid} />
                <Route exact path="/today" render={() => <Today newResourceId={this.props.newResourceId} newTaskId={this.props.newTaskId} taskModalShow={this.props.taskModalShow} confirmedCompletedGoal={this.props.confirmedCompletedGoal} resourceModalOpen={this.props.resourceModalOpen} taskModalOpen={this.props.taskModalOpen} loggedinUser={this.props.loggedinUser} completeTask={this.props.completeTask} completeTaskids={this.props.completeTaskids} handleGoalClick={this.props.handleGoalClick}/>} />
                <Route exact path="/calendar" render={() => <BigCalendar loggedinUser={this.props.loggedinUser} />} />
                <Route exact path="/goals" render={() => <AllGoals resourceModalOpen={this.props.resourceModalOpen} taskModalOpen={this.props.taskModalOpen} loggedinUser={this.props.loggedinUser} handleGoalClick={this.props.handleGoalClick}/>} />
            </div>
        )        
    }

}
