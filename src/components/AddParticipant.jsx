import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addParticipant } from "./participantsSlice";
import TimerWindow from "./TimerWindow";
import { v4 as uuidv4 } from 'uuid';

const AddParticipant = () => {
const [name, setName] = useState("");
const [showTimer, setShowTimer] = useState(false);

const dispatch = useDispatch();

const handleSubmit = e => {
e.preventDefault();
const id = uuidv4(); // генерация уникального ID
if (name) {
setShowTimer(true);
}
};

const handleCancel = () => {
setName("");
setShowTimer(false);
};

const handleSave = timerValue => {
const id = uuidv4(); // генерация уникального ID
dispatch({ name, id, time: timerValue });
setName("");
setShowTimer(false);
};

return (
<div>
{showTimer ? (
<TimerWindow
       participantName={name}
       participantId={id}
       onCancel={handleCancel}
       onSave={handleSave}
     />
) : (
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Enter name"
value={name}
onChange={e => setName(e.target.value)}
/>
<button type="submit">Add Participant</button>
</form>
)}
</div>
);
};

export default AddParticipant;