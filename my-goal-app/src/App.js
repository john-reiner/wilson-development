import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router'
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import GoalShowPage from './components/GoalShowPage'
import NewTask from './components/NewTask'
import NewResource from './components/NewResource'
import NewGoal from './components/NewGoal'


export default class  App extends Component {

  state = {
    username: '',
    password: '',
    users: [],
    loggedinUser: {},
    clickedGoalid: '',
    completeTaskids: [],
    deleteModalShow: false,
    completedGoal: {}
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/users")
    .then(response => response.json())
    .then(users => this.setState({users}))
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.users.length > 0) {
      this.loginUser() 
    }
  }

  loginUser = () => {
    let user = this.state.users.find(user => user.username === this.state.username)
    if (user && user.password ===  this.state.password) {
      this.setState({
        loggedinUser: user
      })
    } else {
      alert('Wrong Username or Password')
    }
  }

  handleGoalClick = id => {
    this.setState({
      clickedGoalid: id
    })
  }

  completeTask = id => {
    if (this.state.completeTaskids.includes(id)) {
      this.setState({
        completeTaskids: this.state.completeTaskids.filter(taskId => taskId !== id)
      })
    } else {
      this.setState({
        completeTaskids: [...this.state.completeTaskids, id]
      })
    }
  }



  checkUserTasks = () => {
    if (this.state.loggedinUser.goals !== undefined && this.state.completeTaskids.length !== 0) {
        this.state.loggedinUser.goals.forEach(goal => {
          let target = []
          goal.tasks.forEach(task => {
            target.push(task.id)
          })
          if (target.length !== 0 ) {
            if (target.every(v => this.state.completeTaskids.includes(v))) {
              this.deleteModalOpen()
              // alert(`you completed ${goal.goal_name}!!`)
              this.setState({
                completeTaskids: [...this.state.completeTaskids].filter(ids => !target.includes(ids)),
                completedGoal: goal
              })
            }
          }
        });
    }
  }

  deleteModalOpen = () => {
    this.setState({deleteModalShow: true})
  }

  deleteModalClose = () => {
    this.setState({deleteModalShow: false})
  }

  completeGoal = (id) => {
    fetch(`http://localhost:3000/api/v1/goals/${id}`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          is_complete: true
      })
    })
    
    this.deleteModalClose()
  }

  render() {
    
    let username = this.state.username
    let password = this.state.password
    let loggedinUser = this.state.loggedinUser
    let clickedGoalid = this.state.clickedGoalid
    let completeTaskids = this.state.completeTaskids
    let deleteModalShow = this.state.deleteModalShow
    this.checkUserTasks()
    let completedGoal = this.state.completedGoal
    return (
      <div className="App">
        <NavBar loggedinUser={loggedinUser}/> 
        <MainBody completeGoal={this.completeGoal} completedGoal={completedGoal} deleteModalClose={this.deleteModalClose} deleteModalShow={deleteModalShow} loggedinUser={loggedinUser} handleGoalClick={this.handleGoalClick} completeTaskids={completeTaskids} completeTask={this.completeTask}/>
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/" render={(routerProps) => <SignIn username={username} password={password} handleChange={this.handleChange} handlesubmit={this.handleSubmit} />} />
        <Route exact path="/goal_showpage" render={() => <GoalShowPage clickedGoalid={clickedGoalid} completeTaskids={completeTaskids} completeTask={this.completeTask} />} />
        <Route exact path="/add_task" render={() => <NewTask clickedGoalid={clickedGoalid}/>} />
        <Route exact path="/add_resource" render={() => <NewResource clickedGoalid={clickedGoalid} />} />
        <Route exact path="/add_goal" render={() => <NewGoal loggedinUser={loggedinUser}/>} />
      </div>
    );
  }
}