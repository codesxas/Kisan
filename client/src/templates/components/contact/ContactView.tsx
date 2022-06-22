import MessageHistory from "../history/MessageHistory";
import ContactDetails from "./ContactDetails";
import NoContactView from "./NoContactView";

type Props = {
  activeContact: any | null;
  contactType: string;
  noContactData: any | null;
};

function View({ activeContact, contactType, noContactData }: Props) {
  const { desc, type } = noContactData;
  const activeContactID = activeContact ? activeContact.id : "";

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
