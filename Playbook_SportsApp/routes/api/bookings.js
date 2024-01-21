const express = require('express');
const router = express.Router();
const passport = require('passport');
const Booking = require('../../models/Booking');

const {ObjectId} = require('mongodb');
const Venue = require('../../models/Venue');

router.post('/new', passport.authenticate('jwt', {session: false}), (req, res) => {
    data = req.body
    data.venue = new ObjectId(data.venue)
    data.user = req.user.id
    console.log(data)
    new Booking(data).save().then((booking) => res.json(booking));
    Venue.updateOne({_id: data.venue}, { $addToSet: { slots: [data.datetime, data.datetime] } })
    // res.json({"message": "Booking successful"})
})

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    Booking.find({user: req.user.id})
    .then(bookings => {
        for(booking of bookings){
            let venue_name;
            Venue.findById(booking.venue).then(venue => {booking.venue = venue_name})
            console.log(venue_name)
            console.log(booking)
        }
        
        res.json(bookings)
    })
})

module.exports = router;