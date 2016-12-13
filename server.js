
var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");

//var mongojs = require("mongojs");

var mongoose = require("mongoose");

var app = express();

var Story = require("./models/story.js");
var Comment = require("./models/comment.js");


//console.log();

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/news");
var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: ", error);

});

db.once("open", function() {
	console.log("Mongoose connection a success.");

});

app.get("/", function(req, res) {
	res.send(index.html);

});

app.get("/scrape", function(req, res) {

	request("https://www.sciencedaily.com/news/earth_climate/oceanography/", function(error, response, html) {

var $ = cheerio.load(html);

$("#contents .row .row").each(function(i, element) {
console.log ("element =", element);
var result = {};

result.title = $(this).children("class").text();

result.link = $(this).parent("a").attr("href");

var entry = new Story(result);

entry.save(function(err, doc) {

	if (err) {
		console.log(err);
	}

	else {
		console.log(doc);

	}

  });

});

res.send("Scrape is Finished");

});

app.get("/stories", function(req, res) {
	console.log("we are in the stories route");
	Story.Find({}, function(error, doc) {

		if (error) {
			console.log(error);

		}
		
		else {
			res.json(doc);

		}	
	});	
});

app.get("/stories/:id", function(req, res) {
	Story.findOne({ "_id": req.params.id })

		if (error) {
			console.log(error);

		}

		else {
			res.json(doc);

		}
	});
});	


app.listen(3000, function() {
	console.log("App is running on port 3000");

});