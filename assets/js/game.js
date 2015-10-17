var jumpResult = 0;
$(".num-box").click(function() {
	$(this).toggleClass("box-selected");
	jumpResult = jumpResult + parseInt( $(this).text() );

	if ( $(".box-selected").length == 2 ) {

		$(".step-list .selected").toggleClass("selected").next("li").toggleClass("selected");

		$(this).children().text(jumpResult);
		$(".box-selected").removeClass("box-selected");

		for (i = 0; i < jumpResult; i++)
    			$(".jump-list .selected").toggleClass("selected").prev("li").toggleClass("selected");

		jumpResult = 0;

	}

});
