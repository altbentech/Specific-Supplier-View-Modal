import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import '../styles/ButtonModal.css'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title className="custom-modal-title">New Supplier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Name*"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
          <InputGroup>
          <Form.Control as="textarea" placeholder="Address*" rows={3} />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Telephone*"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Fax*"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
          NOTE: If the supplier doesn’t have an email address, please use
          rtp.supplier@awsys-i.com as default email.
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Name*"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email*"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Contact Person*"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Supplier Category*"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
          <InputGroup>
              <Form.Control as="textarea" placeholder="Remarks" rows={3} />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
