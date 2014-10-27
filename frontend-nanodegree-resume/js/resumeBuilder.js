

//*****OBJECTS******

var bio = {
	"name":"Janna Turadek",
	"role":"Project Manager",
	"welcomeMsg":"Welcome to my resume!",
	"contacts": {
		"mobile": "408-420-9587",
		"email":"janna.turadek@gmail.com",
		"location":"Silver Spring, MD"},
	"skills":["Documentum","Captiva","HTML/CSS","JavaScript"]
};

var work = {
	"jobs":  [
		{
		"employer": "Beach Street Consulting",
		"title": "Project Manager / Developer",
		"location": "Maryland",
		"dates": "Jan 2011 - Present",
		"description": ["Managed teams of up to 7 developers to complete projects from requirements gathering to development to QA / UAT testing, to post go-live support.",
		"Led communication to stakeholders and project team with weekly status reports, technical code / security reviews, issue-identification, and solution walk-throughs.",
		"Built scalable, customized solutions for clients leveraging EMC Documentum xCP and Captiva platforms.",
		"Maintained Beach Street Company website.",
		"Independently developed Beach Street's HR On-Boarding Solution, utilizing Documentum xCP 2.0, which is now EMC Certified."
		]
		}
	]
};

var projects = {
	"projects": [
		{
		"title": "Front End Web Developer",
		"dates": "Oct 2014 - Nov 2014",
		"description":  ["Created on-line Resume using HTML, CSS, JavaScript.","Desc 1"],
		"images":  ["./images/197x148.gif",""]
		},
		{
		"title": "Title 2",
		"dates": "2010 - 2011",
		"description":  ["Desc 3","Desc 4"],
		"images":  ["./images/197x148.gif",""]
		}
	]
};
	
var education = {
	"schools":[
		{
		"name":"Johns Hopkins University",
		"location":"Baltimore, MD",
		"degree":"Bachelor of Science",
		"majors":["Applied Math","Economics"],
		"dates":"2006-2010",
		"url":"http://www.jhu.edu/"
		}
	],
	"onlineCourses":[
		{
		"title":"Accelerated Introduction to Computer Science",
		"school":"Oregon State University",
		"dates":"Dec 2012 - March 2013",
		"url":"http://ecampus.oregonstate.edu/soc/ecatalog/ecoursedetail.htm?subject=CS&coursenumber=165&termcode=all"
		}
	]
};

//******END OBJECTS******

//******DISPLAY ENCAPSULATED FUNCTIONS********

bio.display = function () {
	
	var formattedName = HTMLheaderName.replace("%data%", this.name);
	var formattedRole = HTMLheaderRole.replace("%data%", this.role);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", this.welcomeMsg);
	
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#header").append(formattedWelcomeMsg);
	
	//append contacts
    for (contact in this.contacts) {
        var formattedContact = HTMLcontactGeneric.replace("%data%",this.contacts[contact]);
        formattedContact = formattedContact.replace("%contact%", contact);
        $(".flex-box").append(formattedContact);
    }	
	
	//append picture
	$("#header").append(HTMLbioPic.replace("%data%", "./images/JannaPic.jpg"));
	
	//append skills
	if(this.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		
		for (skill in this.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};

work.display = function() {

	for(jobs in this.jobs) {
		var job = this.jobs[jobs];
		$("#workExperience").append(HTMLworkStart);
		
		//append employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
		$(".work-entry:last").append(formattedEmployerTitle);
	
		//append dates
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);
	
		//append description
		$(".work-entry:last").append(HTMLworkDescriptionStart);
		
		for (desc in job.description) {
            var formattedDescription = HTMLworkDescription.replace("%data%",job.description[desc]);
			
			$("#workDesc").append(formattedDescription);
        }
  }
};

projects.display = function() {
	for (project in this.projects){
		var proj = this.projects[project];
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", proj.dates);
		$(".project-entry:last").append(formattedDates);
		
		//append description
		$(".project-entry:last").append(HTMLprojectDescriptionStart);
		
		for (desc in proj.description) {
            var formattedDescription = HTMLprojectDescription.replace("%data%",proj.description[desc]);
			
			$("#projDesc").append(formattedDescription);
        }
	
		if (proj.images.length > 0) {
			for (image in proj.images) {
				var formattedImage = HTMLprojectImage.replace("%data%",proj.images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};


education.display = function() {
	//display schools
	for (school in this.schools) {
		$("#education").append(HTMLschoolStart);
		
		var school = this.schools[school];
		
		var formattedSchoolName = HTMLschoolName.replace("%data%",school.name);
		formattedSchoolName = formattedSchoolName.replace("#",school.url);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",school.majors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.dates);
		
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);

	}
	
	//append online courses
	$("#education").append(HTMLonlineClasses);
	
	for (onlineCourse in this.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		
		var course = this.onlineCourses[onlineCourse];
		
		var formattedCourseTitle = HTMLonlineTitle.replace("%data%",course.title);
		var formattedCourseSchool = HTMLonlineSchool.replace("%data%",course.school);
		var formattedSCourseDates = HTMLonlineDates.replace("%data%",course.dates);
		
		$(".education-entry:last").append(formattedCourseTitle);
		$(".education-entry:last").append(formattedCourseSchool);
		$(".education-entry:last").append(formattedSCourseDates);
	}
};


//*******Call display functions*******
bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});

  
//add mapp
$("#mapDiv").append(googleMap);
			
