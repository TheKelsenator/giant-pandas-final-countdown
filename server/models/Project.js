const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Project = model('Project', projectSchema);

module.exports = Profile;
