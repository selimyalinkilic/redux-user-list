import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../../redux/actions";
import CustomButton from "../CustomButton/CustomButton";
import "./UserListRow.scss";

const UserListRow = ({ user }) => {
  const [edit, setEdit] = useState("");
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const dispatch = useDispatch();
  return (
    <div className="user-list-detail-row" key={user.id}>
      <div className="user-col">{user.id}</div>
      <div className="user-col">
        {edit ? (
          <input
            type="text"
            name="name"
            className="user-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          user.name
        )}
      </div>
      <div className="user-col">
        {edit ? (
          <input
            type="text"
            name="surname"
            className="user-input"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        ) : (
          user.surname
        )}
      </div>
      <div className="user-col">{user.country}</div>
      <div className="user-col">
        <CustomButton
          type="button"
          onClick={() => {
            dispatch(
              updateUser({
                ...user,
                name: name,
                surname: surname,
              })
            );
            setEdit(!edit);
          }}
          processType="update"
        >
          &#9998;
        </CustomButton>
      </div>
      <div className="user-col">
        <CustomButton
          type="button"
          onClick={() => dispatch(deleteUser(user.id))}
          processType="delete"
        >
          &#10006;
        </CustomButton>
      </div>
    </div>
  );
};

export default UserListRow;
