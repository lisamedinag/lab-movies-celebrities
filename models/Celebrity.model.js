const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const celebritySchema = new Schema({

    name: {
        type: String,
        required: true
    },

    occupation: {
        type: String,
        required: true
    },

    catchPhrase: {
        type: String,
        required: true
    },

    image: {
        type: String,
        // required: true
    }
})

module.exports = model('Celebrity', celebritySchema);