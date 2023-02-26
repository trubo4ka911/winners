import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
  initialState: {
    participants: [],
    searchValue: "",
    sortAscending: true,
    selectedParticipant: null,
  },
  reducers: {
    addParticipant: (state, action) => {
      state.participants.push(action.payload);
    },
    deleteParticipant: (state, action) => {
      state.participants = state.participants.filter(
        (participant) => participant.id !== action.payload
      );
      if (state.selectedParticipant === action.payload) {
        state.selectedParticipant = null;
      }
    },
    updateParticipant: (state, action) => {
      const participantIndex = state.participants.findIndex(
        (participant) => participant.id === action.payload.id
      );
      state.participants[participantIndex] = action.payload;
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
      return {
        ...state,
        participants: [...state.participants, action.payload],
      };
    },
    [setParticipantsAsync.fulfilled]: (state, action) => {
      return {
        ...state,
        participants: action.payload,
      };
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

export default participantsSlice.reducer;
