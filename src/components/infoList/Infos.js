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
      {info.name} {info.phone}
      <button onClick={onRemove}>삭제</button>
    </div>
  );
};

const Infos = ({ infos, onToggle, onRemove }) => {
  return (
    <div>
      {infos.map(info => (
        <InfoItem
          info={info}
          key={info.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default Infos;
