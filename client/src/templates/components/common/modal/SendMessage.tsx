import React from "react";
import { Modal } from "react-bootstrap";

type Props = {
  state: State;
  handleSave: any;
  handleChange: any;
};

type State = {
  showModal: boolean;
  message: string;
  error: boolean;
};

function SendMessage({ state, handleSave, handleChange }: Props) {
  return (
    <Modal
      className="send-message"
      show={state.showModal}
      onHide={() => handleChange("showModal", false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Send Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please enter your message
        <div className="form-group">
          <textarea
            placeholder="Hi. Your OTP is: 123456"
            value={state.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          {state.error && (
            <span className="error">Please enter correct OTP</span>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="send" onClick={handleSave}>
          Send
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default SendMessage;
