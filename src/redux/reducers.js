import { combineReducers } from "redux";
import { USERS_STATES } from "./state";

const userReducer = (state = USERS_STATES, action) => {
  let users;
  switch (action.type) {
    case "GET_ALL_USERS":
      return {
        ...state,
        payload: action.payload,
      };
    case "DELETE_USER":
      users = [...state];
      users = users.filter((user) => user.id !== action.payload);
      return users;
    case "UPDATE_USER":
      users = [...state];
      let index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        users[index] = action.payload;
      }
      return users;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
