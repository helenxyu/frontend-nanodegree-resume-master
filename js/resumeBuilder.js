/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Helen Yu");

// var firstName = "helen";

// var awesomeThoughts = "I am Helen and I am AWESOME!";
// console.log(awesomeThoughts);

// var email = "helenxyu@hotmail.com"

// var newEmail = email.replace("hotmail", "gmail");

// // console.log(email);
// // console.log(newEmail);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// // $("#main").append(funThoughts);

// console.log(funThoughts);

// var role = "Student"
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);

// var name = "Helen Yu"
// var formattedName = HTMLheaderName.replace("%data%", name);
// $("#header").prepend(formattedName);

 var skills =
	["Eating", "Vegging", "Singing", "Painting"]

// // $("#main").append(skills);

// var bio = {
// 	"name" : name,
// 	"role" :role,
// 	"contactinfo" : {
// 		"email": newEmail,
// 		"phone": "604-765-xxxx",
// 		"github": "helenxyu"
// 	},
// 	"skills" : skills
// };

// $("#main").append(bio.name)
// $("#main").append(bio.role)
// $("#main").append(bio.contactinfo.email)
// $("#main").append(bio.skills)

// var work = {}; //using dot notation
// 	work.position = "Marketing Assistant",
// 	work.employer : "Nikkei Canada",
// 	work.years: 2,
// 	work.city : "Richmond"
// }

// var education = {}; //using bracket notation
// 	education["name"] = "UBC",
// 	education["grad"] = "2013",
// 	education["city"] = "Vancouver"


// $("#main").append(work["position"]); //can still call using bracket notation even though defined in dot notation
// $("#main").append(education.name);

var bio = {
	"name" : "Helen Yu",
	"role" :"Student",
	"contactinfo" : {
		"email": "helenxyu@gmail.com",
		"phone": "604-765-xxxx",
		"github": "helenxyu"
	},
	"skills" : skills
};

var education = {
	"schools" : [
		{
			"name" : "UBC",
			"city" : "Vancouver",
			"degree" : "Bsc",
			"major" : "Food Market Analysis"
		},

		{
			"name" : "UBC",
			"city" : "Vancouver",
			"degree" : "Bsc",
			"major" : "Computer Science"
		}
	]
	"onlineCourses" : [
		{
			"title": "JavaScript Basics"
			"Url" : "https://www.udacity.com/course/javascript-basics--ud804"
			"school" : "Udacity"

		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Nikkei Canada",
			"title" : "Marketing Assistant",
			"location" : "Vancouver",
			"dates" : "Sept 2014 - Aug 2016",
			"description" : "Worked in the marketing department for a health foods company... "
		},
		{
			"employer" : "Fresh St Market",
			"title" : "Health St Clerk",
			"location" : "West Vancouver",
			"dates" : "June 2014 - Aug 2014",
			"description" : "Clerk for health foods department... "
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "JavaScript Resume"
			"dates" : "July 2017"
			"description" : "Using JS to build an interactive resume"
		}
	]
};


