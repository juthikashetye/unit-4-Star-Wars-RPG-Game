$(".character").on("click", function(){
	var player = $(this).html();
	$(this).detach();
	$(".characterDiv").append(player);
})