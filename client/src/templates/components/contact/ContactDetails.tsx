import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { AiFillMessage } from "react-icons/ai";
import ItemList from "../common/list/ItemList";
import SendMessage from "../common/modal/SendMessage";

type Props = {
  activeContactID: string;
};

function ContactDetails({ activeContactID }: Props) {
  const { contacts } = useSelector((state: any) => state.PostReducer);
  const [contactDetails, setcontactDetails] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("Hi. Your OTP is: 123456");
  const [error, setError] = useState(false);

  useEffect(() => {
    const activeContact = contacts.filter(
      (item: any) => item.id === activeContactID
    );

    setcontactDetails(activeContact[0]);
  }, [activeContactID]);

  const handleClose = (flag: false) => {
    if (flag) {
      const regex = new RegExp(/ \b[0-9]{6}\b /g);
      const result = regex.test(message);

      setError(result);

      if (result) {
        
      }
    }
    setShowModal(false);
  };

  return (
    <div className="contact-details">
      {contactDetails !== null && (
        <React.Fragment>
          <div className="header">
            <div className="img-wrap bg-teal">
              <div className="contact-img">P</div>
            </div>
            <div className="info-wrap">
              <div className="info-text">
                <p className="contact-name">{contactDetails.name}</p>
                <p className="contact-desc">{contactDetails.organization}</p>
              </div>

              <div className="act-btn">
                <button className="chat-btn" onClick={() => setShowModal(true)}>
                  <AiFillMessage />
                  Chat
                </button>
              </div>
            </div>
          </div>

          <div className="desc-list">
            <div className="desc-item">
              <div className="info-wrap">
                <p className="item-title">Status</p>
                <p className="item-desc">
                  {contactDetails.status}
                  <span>
                    - Currently out of office because of important meeting with
                    clients
                  </span>
                </p>
              </div>
            </div>
            <div className="desc-item">
              <div className="info-wrap">
                <p className="item-title">Full Name</p>
                <p className="item-desc">Ben Cline</p>
              </div>

              <div className="info-wrap">
                <p className="item-title">Contact</p>
                <p className="item-desc">+91 {contactDetails.phoneNumber}</p>
              </div>
            </div>
          </div>

          <div className="contact-history-list">
            <p className="contact-history-title">Shared Conversations ({2})</p>
            <ItemList
              contact_name="Foggy Nelson"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione."
              index={0}
              bgColor={"gray"}
              handleContactChange={() => {}}
            />
            <ItemList
              contact_name="Foggy Nelson"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione."
              index={0}
              bgColor={"gray"}
              handleContactChange={() => {}}
            />
          </div>

          <SendMessage
            show={showModal}
            handleClose={handleClose}
            message={message}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default ContactDetails;
