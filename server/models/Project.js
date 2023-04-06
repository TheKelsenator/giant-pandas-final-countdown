const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: [
    {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp)
    },
  ],
  projectText: {
    type: String,
    required: true,
    minlength: 60,
    maxlength: 500,
    trim: true,
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
 
});

const Project = model('Project', projectSchema);

module.exports = Profile;
