import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';


function SignUp(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const handleUsernameChange = e => setUsername(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    const handleConfirmedPasswordChange = e => setConfirmedPassword(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        if (password === confirmedPassword && password !== '') {
            fetch("http://localhost:3000/api/v1/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
            props.history.push('/')
        } else {
            alert('Passwords are empty or do not match!')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                    <label>
                        Create Username:
                        <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                    </label>
                    <label>
                        Create Password:
                        <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                    </label>
                    <label>
                        Confirm Password:
                        <input type="password" name="confirmedPassword" value={confirmedPassword} onChange={handleConfirmedPasswordChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form> 
        </div>
    )
}

export default withRouter(SignUp);