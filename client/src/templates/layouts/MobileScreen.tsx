import React from "react";
import { useLocation, useParams } from "react-router-dom";
import View from "../components/contact/ContactView";

function MobileScreen() {
  const params = useParams();
  const location = useLocation();
  const pathName = location.pathname;

  const contactType = pathName.includes("contact") ? "contact" : "history";
  const desc =
    contactType === "contact"
      ? "Please select any contact to view their details"
      : "Please select any contact to view the chat history";

  const type =
    contactType === "contact"
      ? "contact_not_selected"
      : "contact_history_not_selected";

  return (
    <div>
      <View
        activeContact={params}
        contactType={contactType}
        noContactData={{ desc, type }}
      />
    </div>
  );
}

export default MobileScreen;
