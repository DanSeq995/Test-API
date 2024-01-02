const mongoose = require('mongoose');

const worksiteSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    city: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
    }
);

const Worksite = mongoose.model('Worksite', worksiteSchema);

module.exports = Worksite;