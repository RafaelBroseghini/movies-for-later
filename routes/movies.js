var express = require("express"),
    router  = express.Router();

var Movie   = require("../models/movie");

router.post("/new", (req, res) =>
    Movie.create({name: req.body.name}, function(err, newMovie){
        if (err) {
            throw err;
        }
        newMovie.save(function(err){
            if (err) {
                throw err;
            }
        console.log("Created and saved movie!");

        res.redirect("/m/all");
        })
    })
)

router.post("/update", (req, res) => 
    Movie.findOneAndUpdate({_id: req.body.id}, { $set: { watched: req.body.watched }}, function(err, existingMovie){
        if (err) {
            throw err;
        } else {
            console.log(req.body.watched);
            
            // existingMovie.watched = req.body.watched
        }

    })
)

router.get("/all", (req, res) =>
    Movie.find({}, function(err, allMovies){
        res.render("movies/all-movies", {movies:allMovies})
    })
)

module.exports = router;