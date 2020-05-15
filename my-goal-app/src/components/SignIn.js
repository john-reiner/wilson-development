import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignIn extends Component {

    render() {
        
        return (
            <div>
                <form onSubmit={this.props.handlesubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" value={this.props.username} onChange={this.props.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.props.password} onChange={this.props.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form> 
                <Link to='/signup'><div>Sign Up!</div></Link>
            </div>
        )
    }
}

