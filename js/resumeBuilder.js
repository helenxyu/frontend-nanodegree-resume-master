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

var role = "Student"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

var name = "Helen Yu"
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

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
	"contacts" : {
		"email": "helenxyu@gmail.com",
		"phone": "604-765-xxxx",
		"github": "helenxyu",
		"location": "Vancouver",
		"linkedin": "helenxyu"		
		},
	"welcomeMessage" : "Hello, welcome to my resume page!",
	"skills" : skills,
	"biopic" : "http://www.gettyimages.ca/gi-resources/images/Embed/new/embed2.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "UBC",
			"degree" : "Bsc",
			"dates" : "2013",
			"location" : "Vancouver",
			"major" : "Food Market Analysis"
		},

		{
			"name" : "UBC",
			"degree" : "Bsc",
			"dates" : "2013",
			"location" : "Vancouver",
			"major" : "Computer Science"
		}
	],
	"onlineCourses" : [
		{
			"title": "JavaScript Basics",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804",
			"school" : "Udacity"

		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Nikkei Canada",
			"title" : "Marketing Assistant",
			"location" : "Richmond, BC",
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
			"title" : "JavaScript Resume",
			"dates" : "July 2017",
			"description" : "Using JS to build an interactive resume"
		},
		{
			"title" : "Test Project",
			"dates" : "August 2017",
			"description" : "test test test"
		}
	]
};


var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
$("#topContacts").append(formattedMobile);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGit);
var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
$("#topContacts").append(formattedLinkedin);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedbioPic);


if (bio.skills.length != 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill)
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill)
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill)
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill)
};

function displayWork(){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);


	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	};
};

displayWork();

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	};
};

projects.display();


function displayEducation(){

	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	};
	$(".education-entry:last").append(HTMLonlineClasses);


	for(course in education.onlineCourses){
		

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedUrl);
	}
};

displayEducation();


$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);	
});


function inName(name){
	var split = name.trim().split(" ");
	firstName = split[0].slice(0,1).toUpperCase() + split[0].slice(1).toLowerCase();
	lastName = split[1].toUpperCase();
	return (firstName + " " + lastName);
};
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);








