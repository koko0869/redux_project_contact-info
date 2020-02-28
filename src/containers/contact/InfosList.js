import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, remove } from "../../modules/contact";
import Infos from "../../components/infoList/Infos";

//매우중요
const InfosList = () => {
    //contact state중  infos를 가져옴
  const { infos } = useSelector(({ contact }) => ({
    infos: contact.infos
  }));
  const dispatch = useDispatch();
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  return <Infos infos={infos} onToggle={onToggle} onRemove={onRemove} />;
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
