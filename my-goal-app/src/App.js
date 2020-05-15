import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router'
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

export default class  App extends Component {

  state = {
    username: '',
    password: '',
    users: [],
    loggedinUser: {}
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

  render() {

    let username = this.state.username
    let password = this.state.password
    let loggedinUser = this.state.loggedinUser
    let loggedinUserGoals = loggedinUser.goals
  
    return (
      <div className="App">
        <NavBar loggedinUser={loggedinUser}/> 
        <MainBody loggedinUserGoals={loggedinUserGoals}/>
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/" render={(routerProps) => <SignIn username={username} password={password} handleChange={this.handleChange} handlesubmit={this.handleSubmit} {...routerProps}/>} />
      </div>
  );
  }

}

