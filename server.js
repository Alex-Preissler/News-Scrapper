var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var exphbs = require("express-handlebars");
var db = require("./models");

var PORT = 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connecct("mongodb://localhost/newsdb", { useNewUrlParser: true });

app.engine("handlebars", exphbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

require("./routes/apiRoutes");

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});