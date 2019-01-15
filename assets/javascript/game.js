$(".character").on("click", function(){
	var player = $(this).html();
	$(".characterDiv").append(player);

})