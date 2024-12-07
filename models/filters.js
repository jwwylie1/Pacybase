const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Report = mongoose.model('Report', reportSchema)
module.exports = Report;