import React from 'react'
import {Button, Nav, Navbar} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";


export default function NavBar(props) {
    
    return (
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src="wilson.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Wilson
                    </Navbar.Brand>
            <Nav className="mr-auto">
                <LinkContainer to="/today">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/calendar">
                    <Nav.Link>Calendar</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/goals">
                    <Nav.Link>Completed</Nav.Link>
                </LinkContainer>
            </Nav>
                <Button variant="outline-secondary">{props.loggedinUser ? props.loggedinUser.username : 'Please Login'}</Button>
        </Navbar>
    )
}
