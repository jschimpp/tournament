/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import './tournament.css';
import { useDispatch } from 'react-redux';
import { setChampionAsync } from '../redux/tournamentSlice';

function Tournament({
  one, two, three, four, five, six, seven, eight, id,
}) {
  const dispatch = useDispatch();
  const [semifinalist, setSemifinalist] = useState([]);
  const [finalist, setFinalist] = useState([]);
  const [winner, setWinner] = useState('');

  const newSemifinalist = [];
  const advanceSemifinals = (player) => {
    newSemifinalist.push(player);
    if (newSemifinalist.length === 4) {
      setSemifinalist(newSemifinalist);
      console.log(semifinalist);
    }
  };

  const newFinalist = [];
  const advanceFinals = (player) => {
    newFinalist.push(player);
    if (newFinalist.length === 2) {
      setFinalist(newFinalist);
    }
  };

  let newWinner = '';
  const win = (player) => {
    newWinner = player;
    setWinner(newWinner);
    setWinner(newWinner);
    console.log(winner);
  };

  if (winner === '') {
    return (
      <div id="tournament">
        <div id="finalist">
          <input onClick={() => { win(finalist[0]); }} type="checkbox" />
          { finalist[0] }
          &nbsp;VS&nbsp;
          { finalist[1] }
          <input type="checkbox" onClick={() => { win(finalist[1]); }} />
        </div>
        <div id="semifinalist-left">

          <div>
            <input onClick={() => { advanceFinals(semifinalist[0]); }} type="checkbox" />
            { semifinalist[0] }
            &nbsp;VS&nbsp;
            { semifinalist[1] }
            <input onClick={() => { advanceFinals(semifinalist[1]); }} type="checkbox" />
          </div>
        </div>
        <div id="semifinalist-right">
          <div>
            <input onClick={() => { advanceFinals(semifinalist[2]); }} type="checkbox" />
            { semifinalist[2] }
            &nbsp;VS&nbsp;
            { semifinalist[3] }
            <input onClick={() => { advanceFinals(semifinalist[3]); }} type="checkbox" />
          </div>
        </div>
        <div id="q1">
          <input onClick={() => { advanceSemifinals(one); }} type="checkbox" />
          { one }
          &nbsp;VS&nbsp;
          { two }
          <input type="checkbox" onClick={() => { advanceSemifinals(two); }} />
        </div>
        <div id="q2">
          <input onClick={() => { advanceSemifinals(three); }} type="checkbox" />
          { three }
          &nbsp;VS&nbsp;
          { four }
          <input type="checkbox" onClick={() => { advanceSemifinals(four); }} />
        </div>
        <div id="q3">
          <input type="checkbox" onClick={() => { advanceSemifinals(five); }} />
          { five }
          &nbsp;VS&nbsp;
          { six }
          <input type="checkbox" onClick={() => { advanceSemifinals(six); }} />
        </div>
        <div id="q4">
          <input type="checkbox" onClick={() => { advanceSemifinals(seven); }} />
          { seven }
          &nbsp;VS&nbsp;
          { eight }
          <input type="checkbox" onClick={() => { advanceSemifinals(eight); }} />
        </div>
      </div>
    );
  }
  dispatch(
    setChampionAsync({
      id,
      champion: winner,
    }),
  );
  return (
    <div id="winner">
      <div id="winner-text">
        { winner.toUpperCase() }
        &nbsp;WINS!!!
      </div>
    </div>
  );
}

export default Tournament;
