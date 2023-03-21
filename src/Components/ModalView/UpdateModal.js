import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const UpdateModal = ({ show, handleClose, submitPeople, user }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Customer Info</Modal.Title>
      </Modal.Header>
      <Form onSubmit={submitPeople}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              defaultValue={user.name}
              placeholder="Enter Name"
              required
            />

            <Form.Control
              type="hidden"
              name="id"
              defaultValue={user.id}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              defaultValue={user.address}
              name="address"
              rows={3}
              placeholder="Enter your address"
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateModal;
