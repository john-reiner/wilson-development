import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    
    return (
        <div className="nav-bar">
            <ul>
            <Link to='/today'><li>Today</li></Link>
                <li>All Goals</li>
                <li id="all-goals">{props.loggedinUser.username}</li>
            </ul>
        </div>
    )
}
