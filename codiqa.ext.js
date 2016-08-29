$("#btnName").on("click", function(){getName()});			// Setting up the Event Handler for clicking on the "btnName" button in the HTML file
function getName() {										// Defining the getName() function to ask for a User's name
	localStorage.userName = prompt("What's your name?");	// The result of the JavaScript prompt() Method is stored in a localStorage object, named userName
	console.log(localStorage.userName);						// Output result to Console for the developer
	if((localStorage.userName === "") || (localStorage.userName === "null") || (localStorage.userName === undefined)) {	// Check that userName is not empty, OR null OR undefined
		alert("Please enter a valid name!");																			// If any of those conditions are True, fire a JavaScript alert() to let the User know of invalid input
	} else {																											// Or else, the input is good, so
		$(".welcomeMsg").html(", " + localStorage.userName.replace(/[^a-zA-Z]/g, "") + "!");							// Find all instances of the "welcomeMsg" class in the HTML file, use the html() method to write their name (but first strip out invalid characters with the replace() method) on-screen, plus concatenation with an exlamation point and comma
	}
} // END getName()

function loadName() {										// Defining the loadName() function to show a User's name, if there is one
	if((localStorage.userName === "") || (localStorage.userName === "null") || (localStorage.userName === undefined)) { // Check if the "userName" localStorage object is empty, OR null, OR undifined
		console.log(localStorage.userName);																				// If any of those conditions are True, do nothing except display, in the Console, the contents of "userName"
	} else {																											// Or else, there is a "userName" saved, so,
		$(".welcomeMsg").html(", " + localStorage.userName.replace(/[^a-zA-Z]/g, "") + "!");							// Display the "userName" on-screen, but first strip out invalid characters
	}	
} // END loadName()

loadName();			// Invoke the loadName() function at app's startup so can show the User's name, if they've ever input it 

/*
	Author:		Victor Campos <vcampos@sdccd.edu>
	Project:	mySDCE
	Version:	1.0.20160606
	Date:		2016-06-06
	Description:The unoffical San Diego Continuing Education app.
*/