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
  // const onUpdate = useCallback(
  //   (username, phone, id) => dispatch(update(username, phone, id)),
  //   [dispatch]
  // );
  const onUpdate = useCallback((id, username, phone) => dispatch(update(id, username, phone)), [dispatch])

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

  // const onUpdate = e => {
  //   //이부분 해야함!!!!!
  //   console.log(form.username, form.phone, form.id,"form.username, form.phone, form.id)")
  //   dispatch(update(form.username, form.phone, form.id));
  //   alert("연락처를 수정 하였습니다!! ");
  // };

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

// export default connect(
//     ({ contact }) => ({
//       infos: contact.infos
//     }),
//     {
//       toggle,
//       remove
//     }
//   )(InfosList);

export default InfosList;
