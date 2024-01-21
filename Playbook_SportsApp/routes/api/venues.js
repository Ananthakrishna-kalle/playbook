const express = require("express");
const router = express.Router();
const passport = require("passport");

const Venue = require("../../models/Venue");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const venueFields = {};

    if (req.body.nameofvenue) venueFields.nameofvenue = req.body.nameofvenue;
    if (req.body.typeofsport) venueFields.typeofsport = req.body.typeofsport;
    if (req.body.location) venueFields.location = req.body.location;
    if (req.body.description) venueFields.description = req.body.description;
    if (req.body.imgurl) venueFields.imgurl = req.body.imgurl;
    if (req.body.startTime) venueFields.startTime = req.body.startTime;
    if (req.body.endTime) venueFields.endTime = req.body.endTime;

    new Venue(venueFields).save().then((venue) => res.json(venue));
  }
);

router.get("/venues", (req, res) => {
  Venue.find(req.query.sport ? { typeofsport: req.query.sport } : {})
    .sort("-date")
    .populate("user", ["name"])
    .then((venues) => {
      res.json(venues);
    })
    .catch((err) =>
      res.status(404).json({ error: "Error in get api/venues/venues. " + err })
    );
});

router.get("/:venue_id", (req, res) => {
  Venue.findById(req.params.venue_id)
  .then(venue => {
    res.json(venue)
  })
})


router.get('/slots', (req, res) => {
  Venue.findById(req.query.venue)
  .then(venue => {
    console.log(venue.slots)
    res.json({"slots": [10,11,12,14,15,18]})
  })
})

module.exports = router;
