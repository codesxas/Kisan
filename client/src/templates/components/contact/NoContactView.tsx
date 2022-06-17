import React from "react";
import SearchingData from "../../../assets/images/searching-data.svg";
import EmptyBox from "../../../assets/images/empty-box.svg";
import Delayed from "../../../assets/images/delayed.svg";
import NoMessage from "../../../assets/images/no-messages.svg";

type Props = {
  type: string;
  desc: string;
};

function NoContactView({ type, desc }: Props) {
  const handleContactViewImage = (): string => {
    var image;

    if (type === "contact_not_selected") image = SearchingData;
    else if (type === "contact_not_found") image = EmptyBox;
    else if (type === "contact_history_not_selected") image = Delayed;
    else image = NoMessage;

    return image;
  };

  return (
    <div className="no-contact-selected">
      <div className="img-wrap">
        <img src={handleContactViewImage()} className="img-fluid" alt="" />
      </div>
      <div className="info-wrap">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default NoContactView;
