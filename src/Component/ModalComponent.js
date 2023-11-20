import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
const ModalComponenent = ({ dialogOpen, closeDialog, action, onSave }) => {
  const [textValue, setTextValue] = useState("");
  useEffect(() => {
    if (dialogOpen) {
      setTextValue("");
    }
  }, [dialogOpen]);
  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSaveChanges = () => {
    onSave(textValue);
    closeDialog();
  };

  return (
    <Modal show={dialogOpen} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>{action}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formInputText">
            <Form.Label>Enter {action.toLowerCase()}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter text"
              value={textValue}
              onChange={handleTextChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeDialog}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalComponenent;
