import React from "react";

function MessageHistory() {
  return (
    <div className="message-history">
      <div className="header">
        <div className="img-wrap"></div>

        <div className="info-wrap">
          <p className="contact-name">Fabio Basile</p>
        </div>
      </div>

      <div className="chat-window">
        <div className="chat-history-list">
          <div className="chat-history-item">
            <p className="contact-name">Fabio Basile</p>
            <p className="chat-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non
              est positum in nostra actione.
            </p>
          </div>

          <div className="chat-history-item">
            <p className="contact-name">Fabio Basile</p>
            <p className="chat-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non
              est positum in nostra actione.
            </p>
          </div>

          <div className="chat-history-item">
            <p className="contact-name">Fabio Basile</p>
            <p className="chat-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non
              est positum in nostra actione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageHistory;
