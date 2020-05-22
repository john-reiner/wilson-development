import React, { Component } from 'react'

export default class NewTask extends Component {
    
    state = {
        name: '',
        description: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        if (this.state.name !== '' && this.state.description !== '') {
            fetch("http://localhost:3000/api/v1/tasks", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    goal_id: this.props.clickedGoalid,
                    name: this.state.name,
                    description: this.state.description,
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
                            Task Name:
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <label>
                            Task Description:
                            <textarea rows="10" cols="50" type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                {/*   */}
            </div>
        )
    }
}
