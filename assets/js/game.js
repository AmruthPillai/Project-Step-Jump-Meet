var stepCount = 1;

$(".num-box").click(function() {
	$(this).toggleClass("box-selected");
	
	if ( $(".box-selected").length == 2 ) {
		$(".box-selected").removeClass("box-selected");

});

$(".num-box").click(function() {
	$("#jumpResult").append( parseInt( $(this).val() ) );
});

$(".num-box").click(function() {
	$(".step-list .selected").toggleClass("selected").next("li").toggleClass("selected");
	stepCount = stepCount + 1;
	$("#stepCount").text(stepCount);
});

$(".num-box").click(function() {
	$(".jump-list .selected").toggleClass("selected").prev("li").toggleClass("selected");
});
