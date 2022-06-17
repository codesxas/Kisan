import React from "react";
import { AiFillMessage } from "react-icons/ai";
import ItemList from "../common/list/ItemList";

function ContactDetails() {
  return (
    <div className="contact-details">
      <div className="header">
        <div className="img-wrap bg-teal">
          <div className="contact-img">P</div>
        </div>
        <div className="info-wrap">
          <div className="info-text">
            <p className="contact-name">Fabio Basile</p>
            <p className="contact-desc">Product Designer at Square Inc.</p>
          </div>

          <div className="act-btn">
            <button className="chat-btn">
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
              Unavailable
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
            <p className="item-desc">+91 708 324 7890</p>
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
    </div>
  );
}

export default ContactDetails;
