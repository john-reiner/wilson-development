import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="nav-bar">
            <ul>
            <Link to='/'><li>Today</li></Link>
                <li>All Tasks</li>
                <li id="all-goals">All Goals</li>
            </ul>
        </div>
    )
}
