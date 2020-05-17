import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    
    return (
        <div className="nav-bar">
            <ul>
            <Link to='/today'><li>Today</li></Link>
            <Link to='/goals'><li>All Goals</li></Link>
                <li id="all-goals">{props.loggedinUser.username}</li>
            </ul>
        </div>
    )
}
