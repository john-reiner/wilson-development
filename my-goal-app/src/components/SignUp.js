import React, { Component } from 'react'


export default class SignUp extends Component {

    state = {
        username: '',
        password: '',
        confirmedPassword: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        if (this.state.password === this.state.confirmedPassword && this.state.password !== '') {
            fetch("http://localhost:3000/api/v1/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                })
            })
        } else {
            alert('Passwords are empty or do not match!')
        }
    }

    render() {
        // console.log(this.state.username, this.state.password, this.state.confirmedPassword)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                        <label>
                            Create Username:
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        </label>
                        <label>
                            Create Password:
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Confirm Password:
                            <input type="password" name="confirmedPassword" value={this.state.confirmedPassword} onChange={this.handleChange}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form> 
            </div>
        )
    }

}
