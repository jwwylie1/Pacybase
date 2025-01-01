const mongoose = require('mongoose');
//const ttl = require('mongoose-ttl')
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
  username: {
    type: String,
    required: false
  },
  platform: {
    type: String,
    required: false
  },
  caption: {
    type: String,
    required: false
  },
  has1: {
    type: Number,
    required: false
  },
  has2: {
    type: Number,
    required: false
  },
  has3: {
    type: Number,
    required: false
  },
  has4: {
    type: Number,
    required: false
  },
  has5: {
    type: Number,
    required: false
  },
  has6: {
    type: Number,
    required: false
  },
  has7: {
    type: Number,
    required: false
  },
  has8: {
    type: Number,
    required: false
  },
  has9: {
    type: Number,
    required: false
  },
  has10: {
    type: Number,
    required: false
  },
  has11: {
    type: Number,
    required: false
  },
  has12: {
    type: Number,
    required: false
  },
  want1: {
    type: Number,
    required: false
  },
  want2: {
    type: Number,
    required: false
  },
  want3: {
    type: Number,
    required: false
  },
  want4: {
    type: Number,
    required: false
  },
  want5: {
    type: Number,
    required: false
  },
  want6: {
    type: Number,
    required: false
  },
  want7: {
    type: Number,
    required: false
  },
  want8: {
    type: Number,
    required: false
  },
  want9: {
    type: Number,
    required: false
  },
  want10: {
    type: Number,
    required: false
  },
  want11: {
    type: Number,
    required: false
  },
  want12: {
    type: Number,
    required: false
  },
  pin: {
    type: Number,
    required: false
  },
}, { timestamps: true });

//tradeSchema.plugin(ttl, { ttl: 127800000 });

const Post = mongoose.model('Post', tradeSchema)
module.exports = Post;