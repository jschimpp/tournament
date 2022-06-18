/* eslint-disable no-console */
const express = require('express');
const Tournament = require('../models/tournament');

const router = express.Router();

router.get('/', (req, res) => {
  Tournament.find({ })
    .then((data) => {
      console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      res.send('Data: ', error);
    });
});

router.post('/', (req, res) => {
  const data = req.body;
  const newTournament = new Tournament(data);
  newTournament.save((error) => {
    if (error) {
      console.log(error);
    } else {
      res.status(201).json(newTournament);
    }
  });
});

router.put('/:id', (req, res) => {
  Tournament.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }, (err, doc) => {
    if (err) console.log(err);
    res.json(doc);
  });
});

module.exports = router;
