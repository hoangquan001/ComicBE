const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const genreSchema = new Schema({
    name: String,
    description:{type: String, maxLength:100, default:"description"},
})

const Genre = mongoose.model('genre', genreSchema); 
module.exports = Genre;
