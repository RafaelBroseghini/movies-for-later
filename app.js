const express         = require('express');
const app             = express();
const path            = require('path');
const mongoose        = require('mongoose');
const port            = process.env.PORT || 3000;

mongoose.connect('mongodb://heroku_06wzv33h:clmt3lvsqihdhpoigft3m8t0r@ds133113.mlab.com:33113/heroku_06wzv33h', { useNewUrlParser : true });


var indexRoutes = require("./routes/index"),
    movieRoutes = require("./routes/movies")

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(__dirname + "/public"));


app.use("/", indexRoutes);
app.use("/m", movieRoutes);


app.use((req, res, next) =>
    res.status(404).send("Error 404!")
);

/* This makes the application listen on a port. We have defined either port 3000
or the environment port. The env port is useful when deploying the application. */
app.listen(port, () => 
    console.log(`\nmovies-for-later listening on port ${port}`)
)

module.exports = app;