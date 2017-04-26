console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);



function WelcomeController() {
  this.full_name = "Jacy",
  this.age = 23,
  this.city = "Honokaa",
  this.state = "Hawaii"
  this.shout = function(input) {
	var out = input.toUpperCase();
    out = out + "!";	
    return out;
  }
};

app.controller("WDIController", WDIController);
function WDIController() {
  this.class_name = "Web Development Intensive"
  this.enrolled_students = ["Jess", "Alex", "Tyler", "Troy", "Jacy", "Bob", "Tyler", "Cole", "Bill", "Alexi", "Cam", "Nate"],
  this.start_date = "3/13/2017",
  this.end_date = '6/2/2017',
  this.daysRemaining = function() {
  	var milliSeconds_left = Date.parse(this.end_date) - Date.now();
  	var days_left = Math.floor(milliSeconds_left/1000/24/60/60);
  	return days_left;
  }
};



// var app = angular.module("appTwo", []);
// app.controller("WelcomeController", WelcomeController);

// function WelcomeController(){
//   this.full_name = "YOUR NAME"
// }
