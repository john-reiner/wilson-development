import React from 'react'
import {Modal, Button} from 'react-bootstrap'


export default function DeleteGoal(props) {

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
            <Modal.Title>{`Congrats!! You Completed the ${props.completedGoal.goal_name}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Would you like to mark this goal as complete?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => props.completeGoal(props.completedGoal.id)}>
                Complete
            </Button>
            <Button variant="primary" onClick={props.onHide}>
                Add Task
            </Button>
            </Modal.Footer>
        </Modal>
    )
}
