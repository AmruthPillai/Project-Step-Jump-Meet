var jumpResult = 0;

// What should happen when the document is loaded?
$(document).ready(function() {
	$("#game-over-overlay h1").center();
});

// What should happen when a numbered box is clicked?
$(".num-box").click(function() {

	// Toggle box-selected class for that particular object
	$(this).toggleClass("box-selected");

	// Increment the value of jumpResult
	jumpResult = jumpResult + parseInt( $(this).text() );

	// Check if 2 boxes are selected
	if ( $(".box-selected").length == 2 ) {

		// Increment the Step Counter Selector
		$(".step-list .selected").toggleClass("selected").next("li").toggleClass("selected");

		// Change the value of new jumpResult in the box
		$(this).children().text(jumpResult);

		// Remove all selections from the Grid
		$(".box-selected").removeClass("box-selected");

		// Increment the Jump Counter by jumpResult number of times
		for (i = 0; i < jumpResult; i++)
    			$(".jump-list .selected").toggleClass("selected").prev("li").toggleClass("selected");

    	// Reset jumpResult for the next operation
		jumpResult = 0;

		if ( $(".step-list .selected").text() == $(".jump-list .selected").text() )
			$("#game-over-overlay").css("visibility", "visible").children().fadeTo(500, 1);
	}

});