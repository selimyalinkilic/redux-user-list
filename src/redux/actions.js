export const getAllUsers = (users) => ({
  type: "GET_ALL_USERS",
  payload: users,
});

export const deleteUser = (userId) => ({
  type: "DELETE_USER",
  payload: userId,
});

export const updateUser = (user) => ({
  type: "UPDATE_USER",
  payload: user,
});
