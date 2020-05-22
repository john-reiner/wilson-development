import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'


export default class DeleteGoal extends Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                <Modal.Title>{`Congrats!! You Completed the ${this.props.completedGoal.goal_name}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Would you like to mark this goal as complete?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => this.props.completeGoal(this.props.completedGoal.id)}>
                    Complete
                </Button>
                <Button variant="primary" onClick={this.props.onHide}>
                    Add Task
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
