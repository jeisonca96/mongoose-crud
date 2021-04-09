const { Schema, model } = require('mongoose');

const DeviceSchema = new Schema({
  classroom: { type: Object },
  state: {
    current: { type: String },
    max: { type: String },
    skipSlides: [String],
  },
  isAlreadyConnected: { type: Boolean },
  students: [
    {
      name: { type: String },
      externalUserId: { type: Number },
    },
  ],
});

module.exports = model('Device', DeviceSchema);
