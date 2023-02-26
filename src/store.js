import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import {
  usersSlice,
  addUser,
  deleteUser,
  updateUser,
  selectUser,
  sortUsers,
  searchUsers,
  usersReducer,
} from "./redux/users/usersSlice";
import participantsSlice, {
  addParticipantAsync,
  deleteParticipant,
  selectSortAscending,
  selectParticipant,
  setParticipantsAsync,
  fetchParticipants,
} from "./redux/participants/participantsSlice";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  participants: [],
  selectedUser: null,
  sortAscending: true,
  users: [],
};

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    participants: participantsSlice.reducer,
  },
});

export * from "./redux/users/usersSlice";
export * from "./redux/participants/participantsSlice";
export default store;
