import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  remove,
  update,
  changeField,
  initializeForm
} from "../../modules/contact";
import Infos from "../../components/infoList/Infos";

//매우중요
const InfosList = () => {
  //contact state중  infos를 가져옴
  const { infos, contacts, form } = useSelector(({ contact }) => ({
    infos: contact.infos,
    contacts: contact.contacts,
    form: contact.register
  }));
  const dispatch = useDispatch();
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

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

  const onUpdate = (id, username, phone, handleClose) => {
    //이부분 해야함!!!!!
    dispatch(update(id, username, phone));
    alert("연락처를 수정 하였습니다!! ");
    handleClose();
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);
  ///
  return (
    <Infos
      infos={infos}
      onToggle={onToggle}
      onRemove={onRemove}
      onUpdate={onUpdate}
      onChange={onChange}
      search={contacts.search}
      form={form}
    />
  );
};

export default InfosList;
