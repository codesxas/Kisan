import React from "react";
import { useLocation, useParams } from "react-router-dom";
import View from "../components/contact/ContactView";

function MobileScreen() {
  const params = useParams();
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div>
      <View
        activeContactID={params.id ? params.id : ""}
        contactType={pathName.includes("contact") ? "contact" : "history"}
        noContactData={{
          desc: "Please select any contact to view their details",
          type: "contact_not_selected",
        }}
      />
    </div>
  );
}

export default MobileScreen;
