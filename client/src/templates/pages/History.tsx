import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/contacts/actions";

import Header from "../components/common/header/Header";
import ItemList from "../components/common/list/ItemList";
import View from "../components/contact/ContactView";

function History() {
  let dispatch = useDispatch();
  const { loadingItems, history } = useSelector(
    (state: any) => state.PostReducer
  );

  const [activeContact, setActiveContact] = useState<any | null>(null);
  const [searchContact, setSearchContact] = useState("");
  const [contactData, setContactData] = useState(history);

  useEffect(() => {
    handleGetContactItems();
  }, []);

  useEffect(() => {
    setContactData(history);
  }, [history]);

  const handleGetContactItems = (page = 1, take = 10) => {
    dispatch(actions.getContactItems({ page, take }));
  };

  const randomBackgroundGenerator = (index: number) => {
    if (!history[index].bgColor) {
      const color = ["primary", "orange", "teal", "pink", "green", "gray"];

      const selectedColor = color[Math.floor(Math.random() * color.length)];
      history[index].bgColor = selectedColor;

      return selectedColor;
    }
    return history[index].bgColor;
  };

  const handleContactChange = (index: number) => {
    const selectedContact = contactData[index];
    setActiveContact(selectedContact);
  };

  const handleContactSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setSearchContact(searchValue);

    const searchResult = history.filter((item: any) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setContactData(searchResult);
  };

  return (
    <div className="row">
      {!loadingItems ? (
        <React.Fragment>
          <div className="section col-lg-3">
            <Header
              title="History"
              numOfContacts={contactData.length}
              searchContact={searchContact}
              handleContactSearch={handleContactSearch}
            />

            <div className="contact-list">
              {contactData.map((item: any, index: number) => (
                <ItemList
                  contact_name={item.name}
                  desc={item.desc}
                  bgColor={randomBackgroundGenerator(index)}
                  handleContactChange={handleContactChange}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="section col-lg-9">
            <View
              activeContactID={activeContact ? activeContact.id : ""}
              contactType="history"
              noContactData={{
                desc: "Please select any contact to view the chat history",
                type: "contact_history_not_selected",
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

export default History;
