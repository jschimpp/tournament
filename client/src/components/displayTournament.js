/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import Tournament from './tournament';
import AddParticipants from './addParticipants';

function DisplayTournament() {
  const participants = useSelector((state) => state.tournaments.participants);
  const tournamentName = useSelector((state) => state.tournaments.name);
  const pastTournaments = useSelector((state) => state.tournaments.pastTournaments);
  let id = 0;
  if (pastTournaments.length > 0) {
    id = pastTournaments[pastTournaments.length - 1]._id;
  }
  if (participants.length === 8) {
    return (
      <div>
        <h2>{tournamentName}</h2>
        <p>
          Select the winner of each match. When all winners have been selected, the participants
          of the next round will populate.
        </p>
        <Tournament
          one={participants[0]}
          two={participants[1]}
          three={participants[2]}
          four={participants[3]}
          five={participants[4]}
          six={participants[5]}
          seven={participants[6]}
          eight={participants[7]}
          id={id}
        />
      </div>
    );
  }
  return (<AddParticipants />);
}

export default DisplayTournament;
