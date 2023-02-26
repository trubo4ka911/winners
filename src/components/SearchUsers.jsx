import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SearchUsers = ({ onUserSelect }) => {
const [searchText, setSearchText] = useState('');
const [participants, setParticipants] = useState([]);

useEffect(() => {
// Get participants list from API or store here
const participantsList = [
{ id: 1, firstName: 'John', lastName: 'Doe' },
{ id: 2, firstName: 'Jane', lastName: 'Doe' },
{ id: 3, firstName: 'Bob', lastName: 'Smith' },
{ id: 4, firstName: 'Alice', lastName: 'Jones' },
];
setParticipants(participantsList);
}, []);

const handleSearchTextChange = (event) => {
setSearchText(event.target.value);
};

const filteredParticipants = participants.filter((participant) =>
`${participant.firstName} ${participant.lastName}`
.toLowerCase()
.includes(searchText.toLowerCase())
);

const handleUserSelect = (participant) => {
setSearchText('');
onUserSelect(participant);
};

return (
<div>
<TextField
     label="Поиск пользователей"
     value={searchText}
     onChange={handleSearchTextChange}
     fullWidth
     margin="normal"
   />
<List>
{filteredParticipants.map((participant) => (
<ListItem button key={participant.id} onClick={() => handleUserSelect(participant)}>
<ListItemText primary={`${participant.firstName} ${participant.lastName}`} secondary={`ID: ${participant.id}`} />
</ListItem>
))}
</List>
</div>
);
};

export default SearchUsers;