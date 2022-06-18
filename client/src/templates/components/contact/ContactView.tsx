import React from "react";
import MessageHistory from "../history/MessageHistory";
import ContactDetails from "./ContactDetails";
import NoContactView from "./NoContactView";

type Props = {
  activeContactID: string;
  contactType: string | null;
  noContactData: any | null;
};

function View({ activeContactID, contactType, noContactData }: Props) {
  const { desc, type } = noContactData;

  return (
    <div className="contact-view">
      {activeContactID ? (
        contactType === "contact" ? (
          <ContactDetails activeContactID={activeContactID}  />
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
