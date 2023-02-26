import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteParticipant,
  selectSortAscending,
  sortParticipants,
  updateParticipant,
  searchParticipants,
} from "./redux/participants/participantsSlice";
import {
  addUser,
  deleteUser,
  selectUser,
  sortUsers,
  updateUser,
  searchUsers,
} from "./redux/users/usersSlice";
import { store } from "./store";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantList from "./components/ParticipantsList";
import SearchUsers from "./components/SearchUsers";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const participants = useSelector(selectParticipants);
  const sortAscending = useSelector(selectSortAscending);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(sortParticipants(sortAscending));
  }, [sortAscending, dispatch]);

  const handleAddParticipant = (participant) => {
    dispatch(addParticipant(participant));
  };

  const handleDeleteParticipant = (id) => {
    dispatch(deleteParticipant(id));
  };

  const handleUpdateParticipant = (id, participant) => {
    dispatch(updateParticipant(id, participant));
  };

  const handleSortChange = () => {
    dispatch(sortParticipants(!sortAscending));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(searchParticipants(event.target.value));
  };

  return (
    <div className="App">
      <h1>Winners App</h1>
      <ParticipantForm onAddParticipant={handleAddParticipant} />
      <div className="search-bar">
        <SearchUsers value={searchTerm} onChange={handleSearchChange} />
        <button onClick={handleSortChange}>
          {sortAscending ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <ParticipantList
        participants={participants}
        onDeleteParticipant={handleDeleteParticipant}
        onUpdateParticipant={handleUpdateParticipant}
      />
    </div>
  );
}

export default App;
