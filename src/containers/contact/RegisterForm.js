import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, insert } from "../../modules/contact";
import Register from "../../components/contact/Register";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ contact }) => ({
    form: contact.register
  }));

  //인풋 변경 이벤트 헨들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    //이부분 해야함!!!!!

    dispatch(insert(form.username, form.phone));
    e.preventDefault();
    alert("연락처를 저장 하였습니다!! ");
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  return (
    <Register
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
