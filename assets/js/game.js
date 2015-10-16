var stepCount = 1;
var jumpResult = 0;

$(".box").click(function() {
	$(this).toggleClass("box-selected");
});

$(".box").click(function() {
	$("#jumpResult").text( $(this).find("p").val() );
});

$(".box").click(function() {
	$(".step-list .selected").toggleClass("selected").next("li").toggleClass("selected");
	stepCount = stepCount + 1;
	$("#stepCount").text(stepCount);
});

$(".box").click(function() {
	$(".jump-list .selected").toggleClass("selected").prev("li").toggleClass("selected");
});