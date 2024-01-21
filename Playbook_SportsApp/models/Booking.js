const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    venue: {
        type: Schema.Types.ObjectId,
        ref: 'venues'
    },

    venueName: {
        type: String,
        required: true
    },

    sport: {
        type: String,
        required: true
    },

    datetime: {
        type: Date,
        required: true
    },

    startTime: {
        type: Number,
        required: true
    },

    endTime: {
        type: Number,
        required: true
    },

    equipment: {
        type: [String]
    }
})

module.exports = Booking = mongoose.model('booking', BookingSchema);