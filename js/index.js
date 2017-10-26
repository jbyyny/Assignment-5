$(document).ready(function(){
//this line above always goes at the top//

//input city name

	$("#submit-btn").click(changeImage);
//DEFINE FUNCTION CALLED CHANGEIMAGE FUNCTION

//enter keywords and tags 
// $('.#text').textField(keywordTags);
// function keywordTags();

	function changeImage(){
		event.preventDefault();
	var input = $('#city-type').val();
	console.log(input);
	if (input == "New York" || input == "New York City" || input =="NYC"){
//if(testsomething){then do whatever
	$("body").addClass("nyc");
	}

	if (input == "San Francisco" || input =="SF" ||input == "Bay Area"){
	//then show '#sf' image
	$("body").addClass("sf");
	}

	if (input == "Los Angeles" || input =="LA" || input =="LAX"){
	//then show '#la' image
	$("body").addClass("la");
	}

	if (input == "Austin" || input == "ATX"){
	$("body").addClass("austin");
	//then show '#austin' image
	}

	if (input == "Sydney" || input =="SYD"){
	//then show '#sydney' image
	$("body").addClass("sydney");
	}

}

//how to clear field once text is sumbitted -- should this be part of if else??
$("#city-type").submit("Enter a city name...");
//$("#submit").val("Enter a city name...");
//input city name
//- If a user submits:

 

//update the image


		//MY NOTES...
		//use this to test each section--> alert("wrong");
		//check on browser console for errors
		//	event.preventDefault(); --> use this only for forms and links (eg show, hide, toggle)-- when the HTML takes you elsewhere by default; this stops it
	
	//clear out input


	//listen for entry of city name
	//look up code for a reset field


//submit
//update background image based on input (no browser refresh)







// //when i click submit btn the phot switches
// $('#submit-btn').click(switchPhoto);

// function switchPhoto(){
// 	event.preventDefault();


// }


// <script type="text/javascript">
// function changeImage(a) {
//     document.getElementById("img").src=a;
// }
// </script>

});