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

  const [state, setState] = useState({
    activeContact: null,
    searchContact: "",
    contactData: contacts,
    type: "contact_not_selected",
    desc: "Please select any contact to view their details",
    contactType: "contact",
  });

  useEffect(() => {
    if (!contacts.length || contacts.length !== state.contactData.length)
      handleGetContactItems();
  }, []);

  useEffect(() => {
    handleChange("contactData", contacts);
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

  const handleOnContactClick = (index: number) => {
    const selectedContact = state.contactData[index];
    handleChange("activeContact", selectedContact);

    if (window.innerWidth < 768) {
      navigate(`/mobile/contact/${selectedContact.id}`);
    }
  };

  const handleContactSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    handleChange("searchContact", searchValue);

    const searchResult = contacts.filter(
      (item: any) =>
        item.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchValue.toLowerCase())
    );

    handleChange("contactData", searchResult);

    if (!searchResult.length) {
      handleChange("desc", "Please try searching for another contact");
      handleChange("type", "contact_not_found");
    }
  };

  const handleChange = (check: string, value: any) => {
    setState((prevState) => ({
      ...prevState,
      [check]: value,
    }));
  };

  return (
    <div className="row">
      {!loadingContacts ? (
        <React.Fragment>
          <div className="section col-md-3">
            <Header
              title="Contact Book"
              numOfContacts={state.contactData.length}
              searchContact={state.searchContact}
              handleContactSearch={handleContactSearch}
            />

            <div className="contact-list">
              {state.contactData.map((item: any, index: number) => (
                <React.Fragment key={index}>
                  <ItemList
                    contactDetails={{
                      name: `${item.first_name} ${item.last_name}`,
                      desc: item.organization,
                    }}
                    bgColor={randomBackgroundGenerator(index)}
                    handleOnContactClick={handleOnContactClick}
                    index={index}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="section col-md-9">
            <View
              activeContact={state.activeContact}
              contactType={state.contactType}
              noContactData={{
                desc: state.desc,
                type: state.type,
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
