import React, { useState } from "react";
import Header from "../components/common/header/Header";
import ItemList from "../components/common/list/ItemList";
import View from "../components/contact/ContactView";

const data = [
  {
    contact_name: "Dann Petty",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
  },
  {
    contact_name: "Robert Frankestien",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
  },
];

function History() {
  const [activeContact, setActiveContact] = useState({});
  const [searchContact, setSearchContact] = useState("");
  const [contactData, setContactData] = useState(data);

  const color = ["primary", "orange", "teal", "pink", "green", "gray"];
  const randomBackgroundGenerator = () => {
    return color[Math.floor(Math.random() * color.length)];
  };

  const handleContactChange = (index: number) => {
    const selectedContact = contactData[index];
    setActiveContact(selectedContact);
  };

  const handleContactSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setSearchContact(searchValue);

    const searchResult = data.filter((item) =>
      item.contact_name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setContactData(searchResult);
  };

  return (
    <div className="row">
      <div className="section col-lg-3">
        <Header
          title="History"
          numOfContacts={contactData.length}
          searchContact={searchContact}
          handleContactSearch={handleContactSearch}
        />

        <div className="contact-list">
          {contactData.map((item, index) => (
            <ItemList
              {...item}
              bgColor={randomBackgroundGenerator()}
              handleContactChange={handleContactChange}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="section col-lg-9">
        <View
          activeContact={activeContact}
          contactType="history"
          noContactData={{
            desc: "Please select any contact to view the chat history",
            type: "contact_history_not_selected",
          }}
        />
      </div>
    </div>
  );
}

export default History;
