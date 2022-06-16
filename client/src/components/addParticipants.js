/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import './addParticipants.css';
import { useDispatch } from 'react-redux';
import { setTournament, saveTournamentAsync } from '../redux/tournamentSlice';

const participantsList = [];
function AddParticipants() {
  const [newParticipant, setNewParticipant] = useState();
  const [tournamentName, setTournamentName] = useState('');
  const dispatch = useDispatch();

  const addOneParticipant = (event) => {
    event.preventDefault();
    participantsList.push(newParticipant);
    setNewParticipant('');
    if (participantsList.length === 8) {
      dispatch(
        setTournament({
          name: tournamentName,
          participants: participantsList,
        }),
      );
      dispatch(
        saveTournamentAsync({
          name: tournamentName,
          participants: participantsList,
        }),
      );
    }
  };

  return (
    <div>
      <ol>
        <p id="bold">Instructions:</p>
        <li>Enter the tournament name in the upper box.</li>
        <li>Enter a participants name and press &quot;Add Participant.&quot; Repeat this for eight
          participants.
        </li>
      </ol>
      <h3>
        Tournament Name:
        <input
          value={tournamentName}
          onChange={(event) => { setTournamentName(event.target.value); }}
        />
      </h3>
      <h3>
        Enter Names of Participants:
        <input
          value={newParticipant}
          onChange={(event) => { setNewParticipant(event.target.value); }}
        />
        <button type="button" onClick={addOneParticipant}>Add Participant</button>
      </h3>
      <h3>
        Enter
        &nbsp;
        {8 - participantsList.length}
        &nbsp;
        more participants
      </h3>
    </div>
  );
}

export default AddParticipants;
