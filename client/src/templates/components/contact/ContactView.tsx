import React from "react";
import MessageHistory from "../history/MessageHistory";
import ContactDetails from "./ContactDetails";
import NoContactView from "./NoContactView";

type Props = {
  activeContact: object;
  contactType: string | null;
  noContactData: any | null;
};

function View({ activeContact, contactType, noContactData }: Props) {
  const { desc, type } = noContactData;

  return (
    <div className="contact-view">
      {Object.keys(activeContact).length ? (
        contactType === "contact" ? (
          <ContactDetails />
        ) : (
          <MessageHistory />
        )
      ) : (
        <NoContactView desc={desc} type={type} />
      )}
    </div>
  );
}

export default View;
