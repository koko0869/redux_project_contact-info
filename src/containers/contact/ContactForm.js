import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../../modules/contact";
import RegisterForm from "../../components/contact/Register";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ contact }) => ({
    form: contact.contacts
  }));

  //인풋 변경 이벤트 헨들러
  const onChange = e => {
    const { value, name } = e.target;
    console.log("1111111");
    dispatch(
      changeField({
        form: "contacts",
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm("contacts"));
  }, [dispatch]);

  return (
    <RegisterForm
      type="contacts"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default ContactForm;
