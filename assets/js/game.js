// Game Variables
var stepCounter = 1;
var jumpCounter = 26;
var jumpResult = 0;
var negativeFlag = 0;

// What should happen when the document is loaded?
$(document).ready(function() {
	$(".page-overlay h1").center();
});

// What should happen when a numbered box is clicked?
$(".num-box").click(function() {

	// Toggle box-selected class for that particular object
	$(this).toggleClass("box-selected");

	// If the negative box was selected, toggle negativeFlag to ON
	if ( $(this).hasClass("negative") )
		negativeFlag = 1

	// Check if 2 boxes are selected
	if ( $(".box-selected").length == 2 ) {

		if (negativeFlag == 0) {
			// Increment the value of jumpResult
			jumpResult += parseInt( $(this).text() );
		} else if (negativeFlag == 1) {
			// Decrement the value of jumpResult
			jumpResult -= parseInt( $(this).text() );
		}

		// Increment the Step Counter Selector
		$(".step-list .selected").toggleClass("selected").addClass("animated rollOut").next("li").toggleClass("selected");
		stepCounter += 1;

		// Change the value of new jumpResult in the box
		$(this).children().text(jumpResult);

		// Remove all selections from the Grid
		$(".box-selected").removeClass("box-selected");

		// Check if the jumpResult is above/below 0, then
		// Increment the Jump Counter by jumpResult number of times
		if (jumpResult > 0) {
			for (i = 0; i < jumpResult; i++) {
    			$(".jump-list .selected").toggleClass("selected").prev("li").toggleClass("selected");
    			jumpCounter -= 1;
			}
    	} else if (jumpResult < 0) {
    		for (i = jumpResult; i < 0; i++) {
    			$(".jump-list .selected").toggleClass("selected").next("li").toggleClass("selected");
    			jumpCounter += 1;
    		}
    	}

    	// If jumpCounter goes over the limits, then game is over
    	if ( jumpCounter <= 0 || jumpCounter >= 27 ) {
			$(".game-lose").css("visibility", "visible").children().fadeTo(500, 1);
			throw new Error("Something went badly wrong!");
		}

    	// If number of steps crosses 26, then stop the game and display losing message overlay
    	if ( stepCounter == 27 ) {
			$(".game-lose").css("visibility", "visible").children().fadeTo(500, 1);
			throw new Error("Something went badly wrong!");
		}

		// If both the counters meet, then display congratulatory message overlay
		if ( $(".step-list .selected").text() == $(".jump-list .selected").text() ) {
			$(".game-win").css("visibility", "visible").children().fadeTo(500, 1);
			throw new Error("Something went badly wrong!");
		}

		// Reset jumpResult for the next operation
		jumpResult = 0;

		// negativeFlag must be reset to 0
		negativeFlag = 0;

	} else {

		// Return value of selected box into jumpResult
		jumpResult = parseInt( $(this).text() );

	}

});