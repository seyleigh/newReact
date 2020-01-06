import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/score.css";

class Score extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: true
        };
    }

    handleClose = () => {
        this.setState({ show: false });
        this.props.restartState();
    };

    handleShow = () => {
        this.setState({ show: true });
    };
    // x;

    render() {
        return (
            <div>
                <Modal
                className="modal-container"
                show={this.state.show}
                onHide={this.handleClose}
                >
                <Modal.Header>
                    <Modal.Title className="modal-title">Aw, try again!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your Score: {this.props.score}</p>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>X</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Score;