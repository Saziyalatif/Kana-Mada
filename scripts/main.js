<!--
//Submit button
function submitButton () {
	alert ("Thank you for submitting your thoughts.")
}

// Starting jquery
$(document).ready (function() {
//hide the images
$("foodpictures").hide();	

//make slides of pictures
$("foodpictures").click (function){
	$(this).next().slideToggle(300);

	});
});






//-->