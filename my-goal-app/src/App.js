import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import GoalShowPage from './components/GoalShowPage'
import NewGoal from './components/NewGoal'

function App(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const [loggedinUser, setLoggedinUser] = useState({})
  const [clickedGoalid, setClickedGoalid] = useState('')
  const [completeTaskids, setCompleteTaskids] = useState([])
  const [deleteModalShow, setDeleteModalShow] = useState(false)
  const [taskModalShow, setTaskModalShow] = useState(false)
  const [resourceModalShow, setResourceModalShow] = useState(false)
  const [completedGoal, setCompletedGoal] = useState({})
  const [confirmedCompletedGoal, setConfirmedCompletedGoal] = useState({})
  const [newTaskId, setNewTaskId] = useState('')
  const [newResourceId, setNewResourceId] = useState('')

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/users")
    .then(response => response.json())
    .then(users => setUsers(users))

  }, [])


  useEffect(() => {
    if (completeTaskids.length > 0) {
      fetch(`http://localhost:3000/api/v1/users/${loggedinUser.id}`)
      .then(response => response.json())
      .then(user => setLoggedinUser(user))
      checkUserTasks()
    }
  }, [completeTaskids])

  const handleUsernameChange = e => setUsername(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const handleSubmit = e => {
      e.preventDefault()
      if (users.length > 0) {
          loginUser() 
      }
  }
  
  const loginUser = () => {
    let user = users.find(user => user.username === username)
    if (user && user.password ===  password) {
        setLoggedinUser(user)
        props.history.push('/today')
    } else {
        alert('Wrong Username or Password')
    }
  }

  const handleGoalClick = id => setClickedGoalid(id)

  const completeTask = id => {
    if (completeTaskids.includes(id)) {
      fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          is_complete: false
        })
      })
      setCompleteTaskids(completeTaskids.filter(taskId => taskId !== id))
    } else {
      console.log('clicked task', id)
      fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          is_complete: true
        })
      })
      setCompleteTaskids([...completeTaskids, id])
    }
  }

  const checkUserTasks = () => {
    if (loggedinUser.goals !== undefined && completeTaskids.length !== 0) {
        loggedinUser.goals.forEach(goal => {
          let target = []
          goal.tasks.forEach(task => {
            target.push(task.id)
          })
          if (target.length !== 0 ) {
            if (target.every(v => completeTaskids.includes(v))) {
              deleteModalOpen()
              setCompletedGoal(goal)
            }
          }
        });
    }
  }

  const deleteModalOpen = () => setDeleteModalShow(true)
  const deleteModalClose = () => setDeleteModalShow(false)

  const taskModalOpen = () => setTaskModalShow(true)
  const taskModalClose = () => setTaskModalShow(false)

  const resourceModalOpen = () => setResourceModalShow(true)
  const resourceModalClose = () => setResourceModalShow(false)

  const completeGoal = (id) => {
    let goal = loggedinUser.goals.find(goal => goal.id === id)
    setCompleteTaskids([...completeTaskids].filter(ids => goal.tasks.forEach(task => task.id)))
    setConfirmedCompletedGoal(goal.tasks)
    fetch(`http://localhost:3000/api/v1/goals/${id}`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          is_complete: true
      })
    })
    deleteModalClose()
  }

  const getNewTaskId = (id) => setNewTaskId(id)
  const getNewResourceId = (id) => setNewResourceId(id)
  
  return (
    <div>
      <NavBar loggedinUser={loggedinUser}/> 
      <MainBody newTaskId={newTaskId} getNewResourceId={getNewResourceId} newResourceId={newResourceId} getNewTaskId={getNewTaskId} confirmedCompletedGoal={confirmedCompletedGoal} resourceModalClose={resourceModalClose} resourceModalOpen={resourceModalOpen} resourceModalShow={resourceModalShow} taskModalShow={taskModalShow} taskModalClose={taskModalClose} taskModalOpen={taskModalOpen} clickedGoalid={clickedGoalid} completeGoal={completeGoal} completedGoal={completedGoal} deleteModalClose={deleteModalClose} deleteModalShow={deleteModalShow} loggedinUser={loggedinUser} handleGoalClick={handleGoalClick} completeTaskids={completeTaskids} completeTask={completeTask}/>
      <Route exact path="/signup" render={() => <SignUp />} />
      <Route exact path="/" render={(routerProps) => <SignIn handleSubmit={handleSubmit} username={username} password={password} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} loggedinUser={loggedinUser} username={username} password={password} {...routerProps}/>} />
      <Route exact path="/goal_showpage" render={() => <GoalShowPage newTaskId={newTaskId} newResourceId={newResourceId}  resourceModalOpen={resourceModalOpen} taskModalOpen={taskModalOpen} clickedGoalid={clickedGoalid} completeTaskids={completeTaskids} completeTask={completeTask} />} />
      <Route exact path="/add_goal" render={() => <NewGoal loggedinUser={loggedinUser}/>} />
    </div>
  );
} 
export default withRouter(App);