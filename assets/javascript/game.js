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
	$(".heroDiv").append(player);
	$(".heroDiv figure").addClass("hero");
	appendEnemies();
});

function appendEnemies(){
	$(".enemiesDiv").append($(".character"));
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
		$(".defenderDiv figure").addClass("villain");
	});
}

function activateAttack(){
	var attackPower = $(".hero").data("attack");
	return attackPower;
	
} console.log (activateAttack());