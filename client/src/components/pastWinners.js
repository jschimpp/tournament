/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import './pastWinners.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTournamentsAsync } from '../redux/tournamentSlice';

function PastWinners(/* { pastTournaments } */) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTournamentsAsync());
  }, [dispatch]);

  const pastTournaments = useSelector((state) => state.tournaments.pastTournaments);

  const displayPastTournaments = () => {
    if (pastTournaments.length === 0) {
      return (
        <tr>
          <td>None</td>
          <td>None</td>
        </tr>
      );
    }
    return (
      pastTournaments.map((item) => (
        <tr>
          <td>{ item.name }</td>
          <td>{ item.champion }</td>
        </tr>
      ))
    );
  };
  return (
    <div id="past-winners">
      <h3>Past Tournaments</h3>
      <table>
        <thead>
          <th>Tournament Name</th>
          <th>Champion</th>
        </thead>
        <tbody>
          {displayPastTournaments()}
        </tbody>
      </table>
    </div>
  );
}

export default PastWinners;
