import React, { Component } from 'react'
// import Dropzone from 'react-dropzone'


export default class NewResource extends Component {
    state = {
        name: '',
        description: '',
        url: '',
        file: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        if (this.state.name !== '' && this.state.description !== '') {
            fetch("http://localhost:3000/api/v1/goal_resources", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    goal_id: this.props.clickedGoalid,
                    name: this.state.name,
                    description: this.state.description,
                    url: this.state.url
                    
                })
            })
        } else {
            alert('Feilds are empty')
        }
    }

    render() {
        console.log(this.state.file)
        return (
            <div>

                <form onSubmit={this.onSubmit}>
                    <label>
                        Resource Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Resource Description:
                        <textarea rows="10" cols="50" type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                    </label>
                    <label>
                        url:
                        <input type="text" name="url" value={this.state.url} onChange={this.handleChange}/>
                        <input type="file" id="file" name="file" accept="image/png, image/jpeg" value={this.state.file} onChange={this.handleChange}></input>
                    </label>

                    <input type="submit" value="Submit" />
                </form> 
            </div>
        )
    }
}
