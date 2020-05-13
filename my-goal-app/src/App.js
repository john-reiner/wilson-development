import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

function App() {
  return (
    <div className="App">
      This is the App
      <NavBar />
      <MainBody/>
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
