import React from "react";
import ParticipantCard from "./ParticipantCard";

const ParticipantsList = ({ participants, removeParticipant }) => {
const participantList = participants.map((participant) => (
<ParticipantCard
   key={participant.id}
   participant={participant}
   removeParticipant={removeParticipant}
 />
));

return <div>{participantList}</div>;
};

export default ParticipantsList;