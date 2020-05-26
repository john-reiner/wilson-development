import React, { Component } from 'react'
import { Route } from 'react-router'
import DeleteGoal from './DeleteGoal';
import Today from './Today'
import BigCalendar from './BigCalendar'
import AllGoals from './AllGoals'
import NewTask from './NewTask'
import NewResource from './NewResource'

export default class MainBody extends Component {

    // state = {
    //     tasks: []
    // }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevProps.taskModalShow !== this.props.taskModalShow) {
    //         fetch(`http://localhost:3000/api/v1/users/${this.props.loggedinUser.id}`)
    //         .then(response => response.json())
    //         .then(user => {
    //             let tasks = []
    //             user.goals.forEach(goal => {
    //                 if (goal.tasks.length > 0 && !goal.is_complete) {
    //                     let rgb = `rgb(${goal.red},${goal.green},${goal.blue})`
    //                     goal.tasks.forEach(task => {
    //                         task.rgb = rgb
    //                         tasks.push(task)
    //                     })
    //                 }
    //             });
    //             this.setState({tasks})
    //         })
    //     }
    // }


    render() {
        return (
            <div className="main-body">
                <DeleteGoal completeGoal={this.props.completeGoal} completedGoal={this.props.completedGoal} show={this.props.deleteModalShow} onHide={this.props.deleteModalClose}  />
                <NewTask show={this.props.taskModalShow} onHide={this.props.taskModalClose} clickedGoalid={this.props.clickedGoalid} />
                <NewResource show={this.props.resourceModalShow} onHide={this.props.resourceModalClose}  clickedGoalid={this.props.clickedGoalid} />
                <Route exact path="/today" render={() => <Today confirmedCompletedGoal={this.props.confirmedCompletedGoal} resourceModalOpen={this.props.resourceModalOpen} taskModalOpen={this.props.taskModalOpen} loggedinUser={this.props.loggedinUser} completeTask={this.props.completeTask} completeTaskids={this.props.completeTaskids} handleGoalClick={this.props.handleGoalClick}/>} />
                <Route exact path="/calendar" render={() => <BigCalendar loggedinUser={this.props.loggedinUser} />} />
                <Route exact path="/goals" render={() => <AllGoals loggedinUser={this.props.loggedinUser} handleGoalClick={this.props.handleGoalClick}/>} />
            </div>
        )        
    }

}
