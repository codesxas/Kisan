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
          <ContactDetails activeContactID={activeContactID} />
        ) : (
          <MessageHistory
            contact_name="Dian Loft"
            message_list={[
              {
                message:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
                datetime: "12th Jan, 2021 7:05 pm",
              },
              {
                message:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
                datetime: "12th Jan, 2021 7:05 pm",
              },
              {
                message:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
                datetime: "12th Jan, 2021 7:05 pm",
              },
              {
                message:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.",
                datetime: "12th Jan, 2021 7:05 pm",
              },
            ]}
          />
        )
      ) : (
        <NoContactView desc={desc} type={type} />
      )}
    </div>
  );
}

export default View;
