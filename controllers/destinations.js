const Flight = require('../models/flight');
// const Ticket = require('../models/ticket');
module.exports = {
  create
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    // const tickets = await Ticket.find({flight: flight._id});
    // console.log(tickets);
    // We can push (or unshift) subdocs into Mongoose arrays
    req.body.arrival += "T00:00";
    console.log(flight);
    flight.destinations.push(req.body);
    console.log(flight);
    console.log(req.body);
    try {
      // Save any changes made to the movie doc
      await flight.save();
    } catch (err) {
      console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/flights/${flight._id}`);
  }