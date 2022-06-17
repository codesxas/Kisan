import React, { useState } from "react";
import Header from "../components/common/header/Header";
import ItemList from "../components/common/list/ItemList";
import View from "../components/contact/ContactView";

const data = [
  {
    contact_name: "Dann Petty",
    desc: "Sr. Product Manager",
  },
  {
    contact_name: "Robert Frankestien",
    desc: "Marketing Lead",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Consultant",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Consultant",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Consultant",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Consultant",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Consultant",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Consultant",
  },
  {
    contact_name: "Jeromy Irons",
    desc: "Consultant",
  },
];

function Contact() {
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
      <div className="section col-md-3">
        <Header
          title="Contact Book"
          numOfContacts={contactData.length}
          searchContact={searchContact}
          handleContactSearch={handleContactSearch}
        />

        <div className="contact-list">
          {contactData.map((item, index) => (
            <React.Fragment key={index}>
              <ItemList
                {...item}
                bgColor={randomBackgroundGenerator()}
                handleContactChange={handleContactChange}
                index={index}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="section col-md-9">
        <View
          activeContact={activeContact}
          contactType="contact"
          noContactData={{
            desc: "Please select any contact to view their details",
            type: "contact_not_selected",
          }}
        />
      </div>
    </div>
  );
}

export default Contact;
