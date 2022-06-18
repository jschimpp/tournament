/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  name: String,
  participants: Array,
  champion: String,
});

const Tournament = mongoose.model('Tournaments', tournamentSchema);

module.exports = Tournament;
