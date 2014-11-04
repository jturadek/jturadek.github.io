

//*****OBJECTS******

var bio = {
	"name":"Janna Turadek",
	"role":"Developer / Project Manager",
	"profSummaryText":"Developer / Project Manager with 3.5 years of client-facing experience in the Enterprise Content Management field, including understanding of workflow automation and information systems technology.  A self-starter who thrives as liaison between non-technical clients and technical developers, resulting in well-planned and well-executed projects.",
	"welcomeMsg":"Welcome to my resume!",
	"contacts": {
		"mobile": "408-420-9587",
		"email":"janna.turadek@gmail.com",
		"location":"Silver Spring, MD"},
	"skills":["EMC Documentum and Captiva","HTML/CSS","Java","JavaScript","Technical Project Management"]
};

var work = {
	"jobs":  [
		{
		"employer": "Beach Street Consulting",
		"employerURL": "http://beachstreet.net/",
		"title": "Developer / Project Manager",
		"location": "Washington, DC",
		"dates": "Jan 2011 - Present",
		"description": "Developer and Project Manager, with a focus on creating industry-leading solutions leveraging EMC Captiva and Documentum Software suites.  Able to excel in both non-technical roles requiring clear communication of technical concepts, and technical roles requiring implementation of non-technical concepts.",
		"workItems": [
			{
			"itemClient": "Broadcom",
			"itemSkill": "Project Management",
			"itemDescription": "Managed team of seven to develop a highly-visible Contracts Management Solution.  Lead all client communications including: requirements-gathering with end-users,  integration meetings and code reviews with technical staff, project status and issue escalation with project team, and pointed solution demonstrations to stake-holders including the Broadcom CIO.  Managed project timeline, prioritizing tasks to ensure completion against a strict integration-dependent schedule and setting realistic expectations with client.",
			"itemURL":"",
			"itemURLtext":""
			},
			{
			"itemClient": "Los Angeles County",
			"itemSkill": "Solution Planning and Development",
			"itemDescription": "Worked with three developers to create a Contracts Management rapid (8 week) prototype based on initial requirements.  Facilitated the review process and refinement of requirements based on the prototype.  Developed and delivered a production ready solution allowing for standardized yet flexible management of 10,000+ contracts per year, with roll-out plans for county-wide adoption.",
			"itemURL": "http://www.prnewswire.com/news-releases/la-county-implements-award-winning-contract-management-solution-from-beach-street-consulting-and-emc-262382151.html?utm_source=Beach+Street+Community&utm_campaign=816ed471c6-2014_Q3_Newsletter8_1_2014&utm_medium=email&utm_term=0_fa5ac190b8-816ed471c6-205057729",
			"itemURLtext": "Check out the press release!"
			},
			{
			"itemClient": "Los Angeles County",
			"itemSkill": "Technical User Testing and Training",
			"itemDescription": "Lead several on-site workshops with client's solution improvement team in charge of maintaining and updating solution post go-live.  Familiarized team with infrastructure setup, solution code-layout and object model.  Together, we implemented solution updates from Development to Test to Production environments.  Client team now performs about 75% of solution updates without need of a consultant.",
			"itemURL": "http://beachstreet.net/casestudies/contracts_library_local_government_case_study.html",
			"itemURLtext": "Check out the LA County Case Study!"
			},
			{
			"itemClient": "Internal",
			"itemSkill": "Company Website Management",
			"itemDescription": "Updated and maintained existing company website including: branding enhancements and standardization of styles across website (CSS), redesign of navigation menu and landing page for intuitive user experience (JavaScript), re-write of most viewed content to improve readability.",
			"itemURL": "http://beachstreet.net",
			"itemURLtext": "Check out the website!"
			}
			]
			
		},
		{
		"employer": "eLoyalty",
		"employerURL": "http://www.eloyalty.com/",
		"title": "Associate Consultant",
		"location": "Chicago, IL",
		"dates": "Sept 2010 - Dec 2010",
		"description": "Quality Assurance (QA) Tester for company's proprietary voice analytics software, used at call centers to asses customer attitude.",
		"workItems": [
			{
			"itemClient": "Internal: Fraud Detection Department",
			"itemSkill": "Productive QA Testing",
			"itemDescription": "Selected to work with a small team to improve functionality and usability of a Beta voice-based fraud detection product.  Became familiar with potential clients' (ex: Bank of America) requirements by interviewing call-center managers.  Suggested and created a mock-up of a more intuitive User Interface that would encourage call-center operators to mark specific types of callers as suspicious, and appropriately re-order operators' script upon such action; this suggestion was accepted and implemented.",
			"itemURL":"",
			"itemURLtext":""
			},
			{
			"itemClient": "Internal: Testing Department",
			"itemSkill": "Analytic QA Testing",
			"itemDescription": "Conducted positive quality assurance testing on new releases of voice analysts software.  Implemented new department-wide creation and editing process &mdash; applied to UAT Scripts, bug tickets submitted to engineering, and user guides &mdash; ensuring documentation was written, edited, and uniformly formatted by go-live date.  Communicated directly with product developers to ensure clear understanding of issues and expected results.",
			"itemURL":"",
			"itemURLtext":""			
			}
		]
		}
	]
};

var projects = {
	"projects": [
		{
		"title": "Project Portfolio",
		"dates": "Oct 2014 - Nov 2014",
		"descriptionStart": "Created on-line Portfolio using HTML, CSS, and JavaScript as part of Udacity's Front-End Web Developer Nanodegree.",
		"description":  [],
		"image":  "./images/portfolio_screenshot.png",
		"url":"../portfolio/portfolio.html"
		},
		{
		"title": "Super Impressive Techy Project",
		"dates": "2010 - 2011",
		"descriptionStart": "Used in-depth knowledge of every technology ever to save all kittens and babies.",
		"description":  ["Received prestigious Humanitarian Award from the Save the Cute Things Foundation.","Held educational conferences uniting Cat Ladies with orphans, and rageaholics with kittens in tea-cups."],
		"image":  "./images/menWithKittens.jpg",
		"url":""
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
		"classes":["Accelerated Introduction to Computer Science "],
		"school":"Oregon State University",
		"dates":"Dec 2012 - Mar 2013",
		"url":"http://ecampus.oregonstate.edu/soc/ecatalog/ecoursedetail.htm?subject=CS&coursenumber=165&termcode=all"
		},
		{
		"classes":["Introduction to HTML / CSS" , " JavaScript Basics"," How to Use Git and Github"],
		"school":"Udacity - Front-End Web Developer Nanodegree",
		"dates":"Oct 2014 - Present",
		"url":"https://www.udacity.com/course/nd001"
		}
	]
};

//******END OBJECTS******

//******DISPLAY ENCAPSULATED FUNCTIONS********

bio.display = function () {
	
	var formattedName = HTMLheaderName.replace("%data%", this.name);
	var formattedRole = HTMLheaderRole.replace("%data%", this.role);
	var formattedProfSummary = HTMLProfSummary.replace("%data%", this.profSummary);
	var formattedProfSummaryText = HTMLProfSummaryText.replace("%data%", this.profSummaryText);
	
	//var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", this.welcomeMsg);


	
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	
	//append picture
	$("#header").append(HTMLbioCol1);
	$(".col-md-3:last").append(HTMLbioPic.replace("%data%", "./images/JannaPic.jpg"));
	//append summary and skills
	$("#header").append(HTMLbioCol2);
	$(".col-md-9:last").append(formattedProfSummary);
	$(".col-md-9:last").append(formattedProfSummaryText);
	
	//append skills
	if(this.skills.length > 0) {
		$(".col-md-9:last").append(HTMLskillsStart);
		
		for (skill in this.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
	//$("#header").append(formattedWelcomeMsg);
	
	//append contacts
    for (contact in this.contacts) {
        var formattedContact = HTMLcontactGeneric.replace("%data%",this.contacts[contact]);
        formattedContact = formattedContact.replace("%contact%", contact);
        $("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);
    }	
};

work.display = function() {

	for(jobs in this.jobs) {
		var job = this.jobs[jobs];
		$("#workExperience").append(HTMLworkStart);
		
		//append employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedEmployer = formattedEmployer.replace("#", job.employerURL);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
		$(".work-entry:last").append(formattedEmployerTitle);
	
		//append dates
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);
		
		//append location
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		$(".work-entry:last").append(formattedLocation);
	
		//append description

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedWorkDescription);
		
		//append bullets
		$(".work-entry:last").append(HTMLworkItemStart);
		
		for (item in job.workItems) {

			var formattedWorkSkill = HTMLworkItemSkill.replace("%data%", job.workItems[item].itemSkill);
			var formattedWorkClient = HTMLworkItemClient.replace("%data%", job.workItems[item].itemClient);
			var formattedWorkDescription = HTMLworkItemDescription.replace("%data%", job.workItems[item].itemDescription);
			
			if (job.workItems[item].itemURL.length === 0) {
				var formattedItem = formattedWorkSkill + formattedWorkClient + formattedWorkDescription;
			}
			else {
				var formattedWorkURL = HTMLworkItemURL.replace("#", job.workItems[item].itemURL);
				var formattedWorkURL = formattedWorkURL.replace("%data%", job.workItems[item].itemURLtext);
			
				var formattedItem = formattedWorkSkill + formattedWorkClient + formattedWorkDescription + formattedWorkURL;
			}
			
			$(".workDesc:last").append(formattedItem);
			$(".workDesc:last").append(HTMLworkItemClose);
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
		var formattedDescriptionStart = HTMLprojectDescriptionStart.replace("%data%", proj.descriptionStart);
		$(".project-entry:last").append(formattedDescriptionStart);
		
		for (desc in proj.description) {
            var formattedDescription = HTMLprojectDescription.replace("%data%",proj.description[desc]);
			
			$(".projDesc:last").append(formattedDescription);
        }
	
		if (proj.url.length > 0) {
			var formattedURL = HTMLprojectURL.replace("%data%",proj.url);
			var formattedImage = HTMLprojectImage.replace("%data%",proj.image);
			$(".project-entry:last").append(formattedURL + formattedImage);
		}
		else  {
			var formattedImage = HTMLprojectImage.replace("%data%",proj.image);
			$(".project-entry:last").append(formattedImage);
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
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
		var formattedSchoolNameDegreee = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",school.majors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.dates);
		
		$(".education-entry:last").append(formattedSchoolNameDegreee);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);

	}
	
	//append online courses
	$("#education").append(HTMLonlineClasses);
	
	for (onlineCourse in this.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		
		var course = this.onlineCourses[onlineCourse];
		
		var formattedCourseSchool = HTMLonlineSchool.replace("%data%",course.school);
		formattedCourseSchool = formattedCourseSchool.replace("#",course.url);
		var formattedCourseClassesList = HTMLonlineClassesList.replace("%data%",course.classes);
		var formattedSCourseDates = HTMLonlineDates.replace("%data%",course.dates);
		
		$(".education-entry:last").append(formattedCourseSchool);
		$(".education-entry:last").append(formattedSCourseDates);
		$(".education-entry:last").append(formattedCourseClassesList);
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
			
