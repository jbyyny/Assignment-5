$(document).ready(function(){
//this line above always goes at the top//



//define function called changeImage
	$("#submit-btn").click(changeImage);


//input city name

	function changeImage(){
		event.preventDefault();
	var input = $('#city-type').val();

	if (input == "New York" || input == "New York City" || input =="NYC"){
//if(testSomething){then then show '#nyc' image
	$("body").addClass("nyc");
	$("#submit-btn").click(changeImage);
	//if not "New York", "New York City", or "NYC" show citipix skyline image
	 } else {
	 $ ("body").removeClass("nyc");
	}

	if (input == "San Francisco" || input =="SF" ||input == "Bay Area"){
	//then show '#sf' image
	$("body").addClass("sf");
	$("#submit-btn").click(changeImage);
	//if not "San Francisco", "SF", or "Bay Area" show citipix skyline image
	 	} else {
	 $ ("body").removeClass("sf");
	}

	if (input == "Los Angeles" || input =="LA" || input =="LAX"){
	//then show '#la' image
	$("body").addClass("la");
	$("#submit-btn").click(changeImage);
	//if not "Los Angeles", "LA", or "LAX" show citipix skyline image
		} else {
	 $ ("body").removeClass("la");
	}

	if (input == "Austin" || input == "ATX"){
	//then show '#austin' image
	$("body").addClass("austin");
	$("#submit-btn").click(changeImage);
	//if not "Austin", or "ATX" show citipix skyline image
		} else {
	 $ ("body").removeClass("austin");
	}

	if (input == "Sydney" || input =="SYD"){
	//then show '#sydney' image
	$("body").addClass("sydney");
	$("#submit-btn").click(changeImage);
	//if not "Sydney" or "SYD" show citipix skyline image
		} else {
	 $ ("body").removeClass("sydney");
	}

}

//how to clear out input field once text is sumbitted -- should this be part of if else??
$("#city-type").val("Enter a city name...");

//$("#submit").val("Enter a city name...");

 

//update the image


		//MY NOTES...
		//use this to test each section--> alert("wrong");
		//check on browser console for errors
		//event.preventDefault(); --> use this only for forms and links (eg show, hide, toggle)-- when the HTML takes you elsewhere by default; this stops it
	
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