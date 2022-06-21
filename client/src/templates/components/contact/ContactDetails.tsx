// dependencies
import React, { useState, useEffect } from "react";
import { AiFillMessage } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

// components
import ItemList from "../common/list/ItemList";
import SendMessage from "../common/modal/SendMessage";

// redux
import * as actions from "../../../redux/contacts/actions";

// types
type Props = {
  activeContactID: string;
};

type State = {
  showModal: boolean;
  message: string;
  error: boolean;
};

function ContactDetails({ activeContactID }: Props) {
  let dispatch = useDispatch();

  const [state, setState] = useState({
    showModal: false,
    message: "Hi. Your OTP is: 123456",
    error: false,
  });

  useEffect(() => {
    handleGetContact();
  }, [activeContactID]);

  const { loadingSelectedContacts, selectedContact } = useSelector(
    (state: any) => state.PostReducer
  );

  const handleGetContact = () => {
    dispatch(actions.getSelectedContact({ id: activeContactID }));
  };

  const handleChange = (check: string, value: any) => {
    setState((prevState: State) => ({
      ...prevState,
      [check]: value,
    }));
  };

  const handleSave = () => {
    const regex = new RegExp(/\b[0-9]{6}\b/g);
    const result = regex.test(state.message);


    handleChange("error", !result);
    handleChange("showModal", !result);
  };

  return (
    <div className="contact-details">
      {Object.keys(selectedContact).length && (
        <React.Fragment>
          <div className="header">
            <div className="img-wrap bg-teal">
              <div className="contact-img">{selectedContact.first_name[0]}</div>
            </div>
            <div className="info-wrap">
              <div className="info-text">
                <p className="contact-name">
                  {selectedContact.first_name} {selectedContact.last_name}
                </p>
                <p className="contact-desc">{selectedContact.organization}</p>
              </div>

              <div className="act-btn">
                <button
                  className="chat-btn"
                  onClick={() => handleChange("showModal", true)}
                >
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
                  {selectedContact.status}
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
                <p className="item-desc">
                  {selectedContact.first_name} {selectedContact.last_name}
                </p>
              </div>

              <div className="info-wrap">
                <p className="item-title">Contact</p>
                <p className="item-desc">
                  {selectedContact.area_code} {selectedContact.phone_number}
                </p>
              </div>
            </div>
          </div>

          <div className="contact-history-list">
            <p className="contact-history-title">Shared Conversations ({2})</p>
            {/* <ItemList
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
            /> */}
          </div>

          <SendMessage
            state={state}
            handleSave={handleSave}
            handleChange={handleChange}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default ContactDetails;
