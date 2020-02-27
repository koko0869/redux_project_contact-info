import React from "react";
import ContactTemplate from "../components/contact/ContactTemplate";
import ContactForm from "../containers/contact/ContactForm";

const ContactListPage = () => {
  return (
    <div>
      <ContactTemplate>
        <ContactForm type="contacts" />
      </ContactTemplate>
    </div>
  );
};

export default ContactListPage;
