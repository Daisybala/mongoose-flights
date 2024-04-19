const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create
  };

  async function create(req, res) {
    try {
      req.body.departs += "T00:00";
      await Flight.create(req.body);
      console.log(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights/new');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }

  }

  async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    console.log(req.params)
    const tickets = await Ticket.find({flight: flight._id});
    res.render('flights/show', { title: 'Flight Detail', flight, tickets});
  }

  function newFlight(req,res) {
    res.render('flights/new', {errorMsg: ''});

  }

  async function index(req, res) {
    const flights = await Flight.find({});
    console.log(flights);
    res.render('flights/index', { flights });
  }