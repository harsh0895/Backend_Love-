const mongoose = require('mongoose');

// take car name and brand name from the client:-

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        max: 10,
        required: true
    },
    brand: {
        type: String,
        required: true,
        max: 20,
    }
})

const Car = mongoose.model('Car', carSchema);

module.exports = Car;