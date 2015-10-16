$(".box").click(function() {
	$(this).toggleClass("box-selected");
});

$(".box").click(function() {
	$(".step-list .selected").toggleClass("selected").next("li").toggleClass("selected");
});

$(".box").click(function() {
	$(".jump-list .selected").toggleClass("selected").prev("li").toggleClass("selected");
});