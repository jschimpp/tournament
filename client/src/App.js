/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Header from './components/header';
import DisplayTournament from './components/displayTournament';
import PastWinners from './components/pastWinners';

function App() {
  /* useEffect(() => {
    dispatch(getTournamentsAsync());
  }, [dispatch]); */
  const pastTournaments = useSelector((state) => state.tournaments.pastTournaments);

  return (
    <div className="App">
      <Header />
      <DisplayTournament />
      <hr />
      <PastWinners pastTournaments={pastTournaments} />
    </div>
  );
}

export default App;
