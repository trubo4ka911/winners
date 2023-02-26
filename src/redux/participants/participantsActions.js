import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addParticipant, deleteParticipant } from "./participantsSlice";
export const addParticipantAsync = createAsyncThunk(
  "participants/addParticipantAsync",
  async (participant) => {
    const response = await axios.post("/participants.json", participant);
    return response.data;
  }
);

export const setParticipantsAsync = createAsyncThunk(
  "participants/setParticipantsAsync",
  async () => {
    const response = await axios.get("/participants.json");
    return response.data;
  }
);

const participantsSlice = createSlice({
  name: "participants",
  initialState: [],
  reducers: {
    addParticipant: (state, action) => {
      state.push(action.payload);
    },
    deleteParticipant: (state, action) => {
      return state.filter((participant) => participant.id !== action.payload);
    },
    updateParticipant: (state, action) => {
      const { id, firstName, lastName, time } = action.payload;
      const participantIndex = state.findIndex(
        (participant) => participant.id === id
      );
      if (participantIndex !== -1) {
        state[participantIndex].firstName = firstName;
        state[participantIndex].lastName = lastName;
        state[participantIndex].time = time;
      }
    },
    selectParticipant: (state, action) => {
      state.selectedParticipant = action.payload;
    },
    searchParticipants: (state, action) => {
      state.searchValue = action.payload;
    },
    sortParticipants: (state, action) => {
      state.sortAscending = action.payload;
    },
  },
  extraReducers: {
    [addParticipantAsync.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [setParticipantsAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  addParticipant,
  deleteParticipant,
  updateParticipant,
  selectParticipant,
  searchParticipants,
  sortParticipants,
} = participantsSlice.actions;

export * from "./participantsSlice";
export * from "./usersSlice";
export { addParticipant, deleteParticipant };
