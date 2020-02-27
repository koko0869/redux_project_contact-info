import React from "react";
import ContactTemplate from "../components/contact/ContactTemplate";
import RegisterForm from "../containers/contact/RegisterForm";

const RegisterPage = () => {
  return (
    <ContactTemplate>
      <RegisterForm type="register" />
    </ContactTemplate>
  );
};

export default RegisterPage;
