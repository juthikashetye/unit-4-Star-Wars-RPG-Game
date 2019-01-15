var playerChosen = false;
var yourPlayer = "";
var enemiesTochoose = "";
var enemy = "";

$(".character").on("click", function(){
	var player = $(this).html();
	
	if (playerChosen == true) {
		return null;
	}

	playerChosen = true;
	$(this).detach();
	$(".characterDiv").append(player);
	appendEnemies();
});

function appendEnemies(){
	$(".enemiesDiv").append($(".playersToChoose"));
}
