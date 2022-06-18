import React from "react";
import { Modal } from "react-bootstrap";

type Props = {
  show: boolean;
  handleClose: any;
  message: string;
  handleChange: any;
};

function SendMessage({ show, handleClose, message, handleChange }: Props) {
  return (
    <Modal className="send-message" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Send Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please enter your message
        <div className="form-group">
          <textarea
            placeholder="Hi. Your OTP is: 123456"
            value={message}
            onChange={handleChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="send" onClick={() => handleClose(true)}>
          Send
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default SendMessage;
