// Import mongoose
const mongoose = require('mongoose');

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const Worker = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  joinedOn: {
    type: Date,
    default: Date.now,
  },
});

// create and export model
module.exports = mongoose.model('workers', Worker);
