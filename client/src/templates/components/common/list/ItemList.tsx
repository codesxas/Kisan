import React from "react";

type Props = {
  contactDetails: any | null;
  index: number;
  bgColor: string;
  handleOnContactClick: Function;
};

function ItemList(props: Props) {
  const { contactDetails, index, bgColor, handleOnContactClick } = props;
  const contactImg = contactDetails.name[0];

  return (
    <div className="list-item" onClick={() => handleOnContactClick(index)}>
      <div className={`img-wrap bg-${bgColor}`}>
        <div className="contact-img">{contactImg}</div>
      </div>

      <div className="info-wrap">
        <div className="contact-name">
          {contactDetails.name}
          <div className="contact-desc">{contactDetails.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
