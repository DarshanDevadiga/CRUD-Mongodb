const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
   description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
    },
    status: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('task',taskSchema)