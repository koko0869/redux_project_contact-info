import React from "react";

const InfoItem = ({ info, onToggle, onRemove }) => {
  console.log(info);
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(info.id)}
        checked={info.favorite}
        readOnly={true}
      />
      {info.username} {info.phone}
      <button onClick={() => onRemove(info.id)}>삭제</button>
    </div>
  );
};

const Infos = ({ infos, onToggle, onRemove, search }) => {
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
            />
          )))
      }
    </div>
  );
};

export default Infos;
