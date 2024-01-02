const mongoose = require('mongoose');

const rootSchema = new mongoose.Schema(
  {
    status: {
      type: Number,
      required: true,
      unique: true
    },
    error: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
    }
);

const Root = mongoose.model('Root', rootSchema);

module.exports = Root;