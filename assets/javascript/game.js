var playerChosen = false;
var enemyChosen = false;
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
	selectEnemy();
}

function selectEnemy(){
	$(".character").on("click", function(){
		
		var enemy = $(this).html();

		if (enemyChosen == true) {
		return null;
	}
		enemyChosen = true;
		$(this).detach();
		$(".defenderDiv").append(enemy);
	});
}