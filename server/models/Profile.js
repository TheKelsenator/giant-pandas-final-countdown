const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  
  jobTitle: {
    type: String,
    required: true,
    trim: true
  }
 
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
