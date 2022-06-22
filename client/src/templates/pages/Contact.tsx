import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/contacts/actions";

import Header from "../components/common/header/Header";
import ItemList from "../components/common/list/ItemList";
import View from "../components/contact/ContactView";

function Contact() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { loadingContacts, contacts } = useSelector(
    (state: any) => state.PostReducer
  );

  const [activeContact, setActiveContact] = useState<any | null>(null);
  const [searchContact, setSearchContact] = useState("");
  const [contactData, setContactData] = useState(contacts);

  useEffect(() => {
    if (!contacts.length) handleGetContactItems();
  }, []);

  useEffect(() => {
    setContactData(contacts);
  }, [contacts]);

  const handleGetContactItems = () => {
    dispatch(actions.getContact());
  };

  const randomBackgroundGenerator = (index: number) => {
    if (!contacts[index].bgColor) {
      const color = ["primary", "orange", "teal", "pink", "green", "gray"];

      const selectedColor = color[Math.floor(Math.random() * color.length)];
      contacts[index].bgColor = selectedColor;

      return selectedColor;
    }
    return contacts[index].bgColor;
  };

  const handleContactChange = (index: number) => {
    const selectedContact = contacts[index];
    setActiveContact(selectedContact);

    if (window.innerWidth < 768) {
      navigate(`/mobile/contact/${selectedContact.id}`);
    }
  };

  const handleContactSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setSearchContact(searchValue);

    const searchResult = contacts.filter(
      (item: any) =>
        item.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setContactData(searchResult);
  };

  return (
    <div className="row">
      {!loadingContacts ? (
        <React.Fragment>
          <div className="section col-md-3">
            <Header
              title="Contact Book"
              numOfContacts={contactData.length}
              searchContact={searchContact}
              handleContactSearch={handleContactSearch}
            />

            <div className="contact-list">
              {contactData.map((item: any, index: number) => (
                <React.Fragment key={index}>
                  <ItemList
                    contactDetails={{
                      name: `${item.first_name} ${item.last_name}`,
                      desc: item.organization,
                    }}
                    bgColor={randomBackgroundGenerator(index)}
                    handleContactChange={handleContactChange}
                    index={index}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="section col-md-9">
            <View
              activeContactID={activeContact ? activeContact.id : ""}
              contactType="contact"
              noContactData={{
                desc: "Please select any contact to view their details",
                type: "contact_not_selected",
              }}
            />
          </div>
        </React.Fragment>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Contact;
