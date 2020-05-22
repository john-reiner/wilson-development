import React, { Component } from 'react'

export default class NewGoal extends Component {

    state = {
        name: '',
        description: '',
        date: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        if (this.state.name !== '' && this.state.description !== '' && this.state.date !== '') {
            fetch("http://localhost:3000/api/v1/goals", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: this.props.loggedinUser.id,
                    goal_name: this.state.name,
                    goal_description: this.state.description,
                    date: this.state.date
                })
            })
        } else {
            alert('Feilds are empty')
        }
    }

    render() {

        
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Goal Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Goal Description:
                        <textarea rows="10" cols="50" type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Date:
                        <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form> 
            </div>
        )
    }
}
