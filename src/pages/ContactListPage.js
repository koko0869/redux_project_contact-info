import React from "react";
import ContactTemplate from "../components/contact/ContactTemplate";
import ContactForm from "../containers/contact/ContactForm";
import Infos from "../containers/contact/InfosList";
const ContactListPage = () => {
  return (
    <div>
      <ContactTemplate>
        <ContactForm type="contacts" />
        <Infos />
      </ContactTemplate>
    </div>
  );
};

export default ContactListPage;
