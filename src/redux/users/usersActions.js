import { createSlice } from "@reduxjs/toolkit";
import { addUser, deleteUser } from "./usersSlice";
const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, firstName, lastName } = action.payload;
      const userIndex = state.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state[userIndex].firstName = firstName;
        state[userIndex].lastName = lastName;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;

export * from "./participantsSlice";
export * from "./usersSlice";
export { addUser, deleteUser };
