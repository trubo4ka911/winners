import React from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@material-ui/core';
import moment from 'moment';

function ParticipantCard(props) {
  const { id, firstName, lastName, time } = props.user;

  return (
    <div className="participant-card">
      <div className="participant-info">
        <Typography variant="h5" component="h2">
          <strong>Name:</strong> {firstName} {lastName}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          <strong>ID:</strong> {id}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          <strong>Time:</strong> {moment.duration(time, 'seconds').as('minutes')} minutes
        </Typography>
      </div>
      <div className="participant-actions">
        <Button className="delete-button" onClick={() => props.onDelete(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ParticipantCard;
