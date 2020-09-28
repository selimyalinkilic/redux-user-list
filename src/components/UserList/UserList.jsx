import React from "react";
import { useSelector } from "react-redux";
import UserListRow from "../UserListRow/UserListRow";
import "./UserList.scss";

const UserList = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className="user-list">
      <div className="user-list-table">
        <div className="user-list-head">
          <div className="user-col">Id</div>
          <div className="user-col">Name</div>
          <div className="user-col">Surname</div>
          <div className="user-col">Country</div>
          <div className="user-col">Update</div>
          <div className="user-col">Delete</div>
        </div>
        <div className="user-list-detail">
          {users.map((user) => (
            <UserListRow key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
