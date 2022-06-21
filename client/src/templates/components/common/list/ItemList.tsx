import React from "react";

type Props = {
  contact_details: any;
  index: number;
  bgColor: string;
  handleContactChange: Function;
};

function ItemList(props: Props) {
  const { contact_details, index, bgColor, handleContactChange } = props;
  const contact_img = contact_details.first_name[0];

  return (
    <div className="list-item" onClick={() => handleContactChange(index)}>
      <div className={`img-wrap bg-${bgColor}`}>
        <div className="contact-img">{contact_img}</div>
      </div>

      <div className="info-wrap">
        <div className="contact-name">
          {contact_details.first_name} {contact_details.last_name}
          <div className="contact-desc">{contact_details.organization}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
