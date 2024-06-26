const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum:['AUS', 'DFW' ,'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
        default: function() {
            // const today = new Date();
            // const year = today.getFullYear();
            // return today.setFullYear(year + 1);
            return new Date().toLocaleDateString();
        }
    }
},{
    timestamps: true
  })

        
const flightSchema = new Schema({
    airline: {
        type: String,
        enum:['American', 'Southwest','United'],
        required: true
    },
    airport: {
        type: String,
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999 
    },
    departs: {
        type: Date,
        default: function() {
            const today = new Date();
            const year = today.getFullYear();
            return today.setFullYear(year + 1);
        }
    },
    destinations: [destinationSchema]
},{
    timestamps: true
  })

module.exports = mongoose.model('Flight', flightSchema);
