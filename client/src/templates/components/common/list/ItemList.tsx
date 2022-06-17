import React from "react";

type Props = {
  contact_name: string;
  desc: string;
  index: number;
  bgColor: string;
  handleContactChange: Function;
};

function ItemList(props: Props) {
  const { contact_name, desc, index, bgColor, handleContactChange } = props;
  const contact_img = contact_name[0];

  return (
    <div className="list-item" onClick={() => handleContactChange(index)}>
      <div className={`img-wrap bg-${bgColor}`}>
        <div className="contact-img">{contact_img}</div>
      </div>

      <div className="info-wrap">
        <div className="contact-name">{contact_name}</div>
        <div className="contact-desc">{desc}</div>
      </div>
    </div>
  );
}

export default ItemList;
