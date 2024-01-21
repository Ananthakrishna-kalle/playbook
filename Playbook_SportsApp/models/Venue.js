const mongoose = require("mongoose");
// const geocoder = require("../config/geocoder");

const Schema = mongoose.Schema;

const VenueSchema = new Schema({
  nameofvenue: {
    type: String,
    required: true,
  },
  typeofsport: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  imgurl: {
    type: String,
  },
  slots: {
    type: [[Date, Date]]
  },
  startTime: {
    type: Number
  },
  endTime: {
    type: Number
  }
});

module.exports = Event = mongoose.model("venue", VenueSchema);
