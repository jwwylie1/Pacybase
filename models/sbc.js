const mongoose = require('mongoose');
//const ttl = require('mongoose-ttl')
const Schema = mongoose.Schema;

const sbcSchema = new Schema({
  squadname: {
    type: String,
    required: false
  },
  sbc: {
    type: String,
    required: true
  },
  card1: {
    type: Number,
    required: false
  },
  card2: {
    type: Number,
    required: false
  },
  card3: {
    type: Number,
    required: false
  },
  card4: {
    type: Number,
    required: false
  },
  card5: {
    type: Number,
    required: false
  },
  card6: {
    type: Number,
    required: false
  },
  card7: {
    type: Number,
    required: false
  },
  card8: {
    type: Number,
    required: false
  },
  card9: {
    type: Number,
    required: false
  },
  card10: {
    type: Number,
    required: false
  },
  card11: {
    type: Number,
    required: false
  },
  rating: {
    type: Number,
    required: true
  },
  chemistry: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
}, { timestamps: true });

//tradeSchema.plugin(ttl, { ttl: 127800000 });

const Sbc = mongoose.model('Sbc', sbcSchema)
module.exports = Sbc;