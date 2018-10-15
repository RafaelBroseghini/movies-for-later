var mongoose = require("mongoose");


var movieSchema = new mongoose.Schema({
    name:       { type : String },
    date:       { type : Date, default : Date.now },
    watched:    { type : Boolean, default : false }
})

module.exports = mongoose.model("Movie", movieSchema);