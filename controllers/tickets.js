const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    req.body.flight = flight;
    console.log(flight);
    const tickets = await Ticket.create(req.body);
    try {
      console.log(req.body);
      await tickets.save();
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
    //   res.redirect('/flights/${flight._id}');
    // res.render('tickets/new',{});
    } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    //   res.render('tickets/new', { errorMsg: err.message });
    }
    res.redirect('/flights/${flight._id}');
}

function newTicket(req,res) {
    res.render('tickets/new',{flightId: req.params.id, errorMsg: '' })
}