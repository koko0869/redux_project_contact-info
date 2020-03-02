import React from "react";
import { useSelector } from "react-redux";
import Favorite from "../../components/favortite/Favorite";
const FavoriteForm = () => {
  //   const dispatch = useDispatch();
  const { infos } = useSelector(({ contact }) => ({
    infos: contact.infos
  }));
  
  return <Favorite infos={infos} />;
};

export default FavoriteForm;
