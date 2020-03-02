import React from "react";
import Modal from "./Modal";

const InfoItem = ({ info, onToggle, onRemove, onUpdate, onChange, form }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(info.id)}
        checked={info.favorite}
        readOnly={true}
      />
      {info.username} {info.phone}
      <Modal
        username={info.username}
        phone={info.phone}
        id={info.id}
        onUpdate={() => onUpdate(info.id, form.username, form.phone)}
        onChange={onChange}
      />
      <button onClick={() => onRemove(info.id)}>삭제</button>
    </div>
  );
};

const Infos = ({
  infos,
  onToggle,
  onRemove,
  search,
  onUpdate,
  onChange,
  form
}) => {
  return (
    <div>
      {
        (infos = infos
          .filter(info => {
            return info.username.indexOf(search) !== -1;
          })
          .map(info => (
            <InfoItem
              info={info}
              key={info.id}
              onToggle={onToggle}
              onRemove={onRemove}
              onUpdate={onUpdate}
              onChange={onChange}
              form={form}
            />
          )))
      }
    </div>
  );
};

export default Infos;
