/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Match({ playerOne, playerTwo }) {
  return (
    <div>
      <input type="checkbox" />
      { playerOne }
      &nbsp;vs&nbsp;
      { playerTwo }
      <input type="checkbox" />
    </div>
  );
}

export default Match;
