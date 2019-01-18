var playerChosen = false;
var enemyChosen = false;
var yourPlayer = "";
var enemiesTochoose = "";
var enemy = "";
var attackPower = $(".hero").data("attack");
var counterAttackPower = $(".villain").data("counterattack");
var heroHp = $(".hero .health").text();

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

function doubleAttack(){
	 attackPower = parseInt($(".hero").data("attack"))*2;
	 $(".hero").attr("data-attack",attackPower);
	
}
doubleAttack();

function reduceHeroHp(){
	 heroHp = parseInt($(".hero .health").text());
	 counterAttackPower = parseInt($(".villain").data("counterattack"));
	 heroHp = heroHp - counterAttackPower;
	 $(".hero .health").text(heroHp);
	
}
reduceHeroHp();
