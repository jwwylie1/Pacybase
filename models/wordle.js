const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wordleSchema = new Schema({
  player: {
    type: String,
    required: true
  },
  guesses: {
    type: Number,
    required: true
  },
  letters: {
    type: Number,
    required: true
  },
  difficulty: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
}, { timestamps: true });

const Wordle = mongoose.model('Wordle', wordleSchema)
module.exports = Wordle;