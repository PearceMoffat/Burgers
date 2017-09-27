var express = require("express");
var burger = require("../models/burger.js");

module.exports = function(app) {
    // Get route, render the index page with all the burgers in the right place
    app.get("/index", function(req, res) {
        // Create two arrays to hold uneaten and eaten burgers
        var availBurgers = [];
        var eatenBurgers = [];
        // Variable to control the center message
        var burgers = 0;
        var message = "";
        // Get all the burgers from the database
        burger.getAllBurgers(function(results){
            // Separate the burgers into the appropriate arrays based on their devoured boolean value
            for (var i=0; i<results.length; i++) {
                if (results[i].devoured) {
                    eatenBurgers.push(results[i]);
                }
                else {
                    availBurgers.push(results[i]);
                    burgers++;
                }
            }
            // Set the message text based on how many burgers are left
            if (burgers === 0) {
                message = "There are no burgers left, add more to eat!"
            }
            else if (burgers === 1) {
                message = "One burger left, better savor it!"
            }
            else {
                message = "You have " + burgers + " burgers left to eat!"
            }
            // Render the page
            res.render("index", {burgers: availBurgers, eaten: eatenBurgers, script: message});
        });
    });
    // Post route, called when a burger is submitted
    app.post("/index", function(req, res) {
        // If the burger name isn't empty, add it to the database
        if (req.body.burgerName != "") {
            burger.addBurger(req.body.burgerName);
        }
        // Display the index page
        res.redirect("/index");
    });
    // Put route, called when a burger is eaten
    app.put("/:id", function(req, res) {
        // Eat da burger! Change the burgers devoured boolean to true
        burger.eatDaBurger(parseInt(req.params.id));
        // Display the index page
        res.redirect("/index");
    });
    // Delete route, called when a burger is removed from the eaten burgers section
    app.delete("/:id", function(req, res) {
        // Remove the burger from the database
        burger.removeBurger(parseInt(req.params.id));
        // Display the index page
        res.redirect("/index");
    })
}