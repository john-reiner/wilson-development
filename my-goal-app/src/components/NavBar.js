import React from 'react'
import {Form, Button, Nav, FormControl, Navbar, NavItem} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >Wilson</Navbar.Brand>
            <Nav className="mr-auto">
                <LinkContainer to="/today">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/calendar">
                    <Nav.Link>Calendar</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/goals">
                    <Nav.Link>Goals</Nav.Link>
                </LinkContainer>
            </Nav>
                <Button variant="outline-info">{props.loggedinUser.username ? props.loggedinUser.username : 'Please Login'}</Button>
        </Navbar>

        // <div className="nav-bar">
        //     <ul id="nav-bar-ul">
        //     <Link to='/today'><li className="nav-bar-item">Today</li></Link>
        //     <Link to='/Calendar'><li className="nav-bar-item">Calendar</li></Link>
        //     <Link to='/goals'><li className="nav-bar-item">All Goals</li></Link>
        //         <li id="user" className="nav-bar-item">{props.loggedinUser.username}</li>
        //     </ul>
        // </div>
    )
}
