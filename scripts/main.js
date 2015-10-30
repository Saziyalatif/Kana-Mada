<!--
//Submit button
function submitButton () {
	alert ("Thank you for submitting your thoughts.");
}

// first image=class top
$function (){
	$(".foodpictures img:first").addClass("top");

//change the image index
var change = function () {
	var current = $(".foodpictures img.top");
	var next = current.next();

// if next image is not there
//set the top class to the first image
//make the current image disappear
//show the previous next image

	if (!next.length){

			next = $(".foodpictures img:first");
			next.addClass("top");

			current.animate({opacity:0.0},1000, function(){
			current.removeClass("top");
			current.css({opacity:1.0});
			}); 

	} else {

//pick next image
//set opacity to 0
//make it appear using animation
//should appear above the top image
		next.css({opacity:0.0})
		.addClass("top")
		.animate({opacity:1.0},1000,function(){
			current.removeClass("top");
		});
	}
			
}
	setInterval(change, 3000);
});	












//-->