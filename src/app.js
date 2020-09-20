// Core modules
const path = require("path");

// NPM modules
const hbs = require('hbs');
const express = require("express");

// Local modules
const geocode = require("./utils/geolocation");
const forecast = require("./utils/forecast");

// Directories
const public_dir = path.join(__dirname, "../public")
const templates_dir = path.join(__dirname, '../templates');
const views_dir = path.join(__dirname, '../templates/views');
const partials_dir = path.join(__dirname, '../templates/partials');

const app = express();

module.exports = app;

// // Hbs settings views & templates
// app.set("view engine", "hbs");
// app.set("views", views_dir);

// hbs.registerPartials(partials_dir);

// // ------------ Routes -------------
// app.use(express.static(public_dir));

// app.get('', (request, response) => {
// 	response.render("index", {
// 		title: "Weather Application",
// 		name: "Index page!",
// 		footer_content: "Created by me!"
// 	});
// });

// app.get('/about', (request, response) => {
// 	response.render("about", {
// 		title: "About Application",
// 		header: "About this application",
// 		content: "This is a simple application that uses nodejs & express to handle the application." +
// 			"It also implements the darksky API for weather information & the mapbox API to retrieve the " +
// 			"geolocation of the device that visits this application.",
// 		footer_content: "Created by me!"
// 	});
// });

// app.get('/help', (request, response) => {
// 	response.render("about", {
// 		title: "Help Application",
// 		header: "Help for this application",
// 		content: "Contact us on sadasdas@gmail.com",
// 		footer_content: "Created by me!"
// 	});
// });

// app.get('/weather', (request, response) => {
// 	if(typeof request.query.address === "undefined") {
// 		return response.send({
// 			error: "Address values is necessary in order to fetch weather for the location!"
// 		});
// 	}

// 	geocode(request.query.address, (error, {latitude, longitude, location} = {}) => {
// 		if(error) { 
// 			return response.send({
// 				error: "Error occurred something went wrong with the location API call!"
// 			});
// 		}

// 		forecast(latitude , longitude, (error, {temperature, rain_perc} = {}) => {
// 			if(error) { 
// 				return response.send({
// 					error: "Error occurred something went wrong with the weather API call!"
// 				});
// 			}

// 			response.send({
// 				address: request.query.address,
// 				location,
// 				temperature,
// 				rain_perc
// 			});
// 		});
// 	});
// });


// // ------------ Not found pages -------------
// app.get('*', (request, response) => {response.render("page_404", {});});
// app.get('/about/*', (request, response) => {response.render("page_404", {});});
// app.get('/help/*', (request, response) => {response.render("page_404", {});});
// app.get('/weather/*', (request, response) => {response.render("page_404", {});});

