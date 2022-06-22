import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/contacts/actions";

import Header from "../components/common/header/Header";
import ItemList from "../components/common/list/ItemList";
import View from "../components/contact/ContactView";

function History() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { loadingHistory, history } = useSelector(
    (state: any) => state.PostReducer
  );

  const [state, setState] = useState({
    activeContact: null,
    searchContact: "",
    contactData: history,
    contactType: "history",
    desc: "Please select any contact to view the chat history",
    type: "contact_history_not_selected",
  });

  useEffect(() => {
    if (!history.length || history.length !== state.contactData.length)
      handleGetContactItems();
  }, []);

  useEffect(() => {
    handleChange("contactData", history);
  }, [history]);

  const handleGetContactItems = () => {
    dispatch(actions.getMessages());
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

  const handleOnContactClick = (index: number) => {
    const selectedContact = state.contactData[index];
    handleChange("activeContact", selectedContact);

    if (window.innerWidth < 768) {
      navigate(`/mobile/history/${selectedContact.id}`);
    }
  };

  const handleContactSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    handleChange("searchContact", searchValue);

    const searchResult = history.filter((item: any) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
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
      {!loadingHistory ? (
        <React.Fragment>
          <div className="section col-lg-3">
            <Header
              title="History"
              numOfContacts={state.contactData.length}
              searchContact={state.searchContact}
              handleContactSearch={handleContactSearch}
            />

            <div className="contact-list">
              {state.contactData.map((item: any, index: number) => (
                <ItemList
                  contactDetails={{
                    name: `${item.first_name} ${item.last_name}`,
                    desc: item.message,
                    date: item.date,
                  }}
                  bgColor={randomBackgroundGenerator(index)}
                  handleOnContactClick={handleOnContactClick}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="section col-lg-9">
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

export default History;
