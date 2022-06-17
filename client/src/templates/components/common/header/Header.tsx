import React from "react";

type Props = {
  title: string;
  numOfContacts: number;
  searchContact: string;
  handleContactSearch: any;
};

function Header({
  title,
  numOfContacts,
  searchContact,
  handleContactSearch,
}: Props) {
  return (
    <div className="header">
      <div className="title">{title}</div>

      <div className="form">
        <div className="form-title">
          Contacts <span>({numOfContacts})</span>
        </div>
        <div className="form-input">
          <input
            placeholder="&#xF002; Search Contact"
            type="text"
            style={{ fontFamily: "Montserrat, FontAwesome" }}
            value={searchContact}
            onChange={handleContactSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
