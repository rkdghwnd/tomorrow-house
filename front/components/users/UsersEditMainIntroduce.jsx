import React from 'react';

const UsersEditMainIntroduce = ({ introduce, onChangeIntroduce }) => {
  return (
    <div className="users-edit-main-introduce">
      <div className="edit-label">
        <label htmlFor="">한줄소개</label>
      </div>
      <div className="edit-input">
        <input
          type="text"
          className="input-secondary"
          onChange={onChangeIntroduce}
          value={introduce}
        />
      </div>
    </div>
  );
};

export default UsersEditMainIntroduce;
