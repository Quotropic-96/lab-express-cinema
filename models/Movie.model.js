const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema ({
    // Could add some security to the model/ default values
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;