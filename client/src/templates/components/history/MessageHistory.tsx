import React from "react";

type Props = {
  contact_name: string;
  message_list: List[];
};

type List = {
  message: string;
  datetime: string;
};

function MessageHistory({ contact_name, message_list }: Props) {
  return (
    <div className="message-history">
      <div className="header">
        <div className="img-wrap bg-primary">
          <div className="contact-img">P</div>
        </div>

        <div className="info-wrap">
          <p className="contact-name">{contact_name}</p>
        </div>
      </div>

      <div className="chat-window">
        <div className="chat-history-list">
          {message_list.map((item, index) => (
            <div className="chat-history-item" key={index}>
              <p className="contact-name">Me</p>
              <p className="chat-content">{item.message}</p>

              <span>{item.datetime}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MessageHistory;
