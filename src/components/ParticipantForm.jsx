import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { addParticipantAsync } from '../store';

function ParticipantForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
    dispatch(
    addParticipantAsync({
    id: uuidv4(),
    firstName,
    lastName,
    time: 0,
    })
    );
    setFirstName('');
    setLastName('');
    }
    };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <TextField type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <label htmlFor="lastName">Last Name:</label>
      <TextField type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <Button type="submit">Add Participant</Button>
    </form>
  );
};

export default ParticipantForm;
