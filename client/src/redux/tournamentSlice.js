/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTournamentsAsync = createAsyncThunk(
  'api/getTournamentsAsync',
  async () => {
    const resp = await fetch('http://localhost:8080/api');
    if (resp.ok) {
      const posts = await resp.json();
      return { posts };
    }
  },
);

export const saveTournamentAsync = createAsyncThunk(
  'api/saveTournamentAsync',
  async (payload) => {
    const resp = await fetch('http://localhost:8080/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        participants: payload.participants,
        champion: 'TBD',
      }),
    });
    if (resp.ok) {
      const post = await resp.json();
      return { post };
    }
  },
);

export const setChampionAsync = createAsyncThunk(
  'api/setChampionAsync',
  async (payload) => {
    const resp = await fetch(`http://localhost:8080/api/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        champion: payload.champion,
      }),
    });
    if (resp.ok) {
      const post = await resp.json();
      return { post };
    }
  },
);

const tournamentSlice = createSlice({
  name: 'tournaments',
  initialState: {
    name: '',
    champion: 'TBD',
    participants: [],
    pastTournaments: [{
      _id: 0, name: 'TBD', participants: [], champion: 'TBD',
    }],
  },
  reducers: {
    setTournament: (state, action) => {
      state.name = action.payload.name;
      state.participants = action.payload.participants;
    },
    setChampion: (state, action) => {
      state.champion = action.payload.champion;
      console.log(action.payload);
    },
  },
  extraReducers: {
    [getTournamentsAsync.fulfilled]: (state, action) => {
      if (action.payload.posts === []) {
        state.pastTournaments = {
          _id: 0, name: 'TBD', participants: [], champion: 'TBD',
        };
      }
      state.pastTournaments = action.payload.posts;
      console.log(state.pastTournaments);
    },
    /* [saveTournamentAsync.fulfilled]: (state, action) => {
      state.pastTournaments.push(action.payload.post);
    }, */
  },
});

export const { setTournament, setChampion } = tournamentSlice.actions;
export default tournamentSlice.reducer;
