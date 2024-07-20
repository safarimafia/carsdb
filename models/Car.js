const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  currentOwner: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Car', CarSchema);
