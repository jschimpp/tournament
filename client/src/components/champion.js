/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

function Champion() {
  const champ = useSelector((state) => state.tournaments.champion);

  return (
    <div>
      { champ }
      &nbsp;WINS!!!
    </div>
  );
}

export default Champion;
