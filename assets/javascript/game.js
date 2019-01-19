var playerChosen = false;
var enemyChosen = false;
var yourPlayer = "";
var enemiesTochoose = "";
var enemy = "";
var attackPower = $(".hero").data("attack");
var counterAttackPower = $(".villain").data("counterattack");
var heroHp = $(".hero .health").text();
var villainHp = $(".villain .health").text();

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
	}else{

		$(this).detach();
		$(".defenderDiv").append(enemy);
		$(".defenderDiv figure").addClass("villain");
	}
		enemyChosen = true;
	});
}

function doubleAttack(){
	 attackPower = parseInt($(".hero").data("attack")) + parseInt($(".hero").attr("data-attack"));
	 $(".hero").data("attack",attackPower);
	
}

function reduceHeroHp(){
	 heroHp = parseInt($(".hero .health").text());
	 counterAttackPower = parseInt($(".villain").data("counterattack"));
	 
	 if (!isNaN(counterAttackPower)) {
	 	heroHp = heroHp - counterAttackPower;
	 	$(".hero .health").text(heroHp); 
	 }
	 else {
	 	heroHp = parseInt($(".hero .health").text());
	}

}

function reduceVillainHp(){
	villainHp = parseInt($(".villain .health").text());
	attackPower = parseInt($(".hero").data("attack"));
	villainHp = villainHp - attackPower;
	$(".villain .health").text(villainHp);

	if (villainHp <= 0) {
	 	$(".defenderDiv").empty();
	 	enemyChosen = false;
	 }
}

function attack(){
	$("button").on("click", function(){
		heroHp = parseInt($(".hero .health").text());
		
		if (heroHp < 1) {
			return null;
		}else 
			reduceVillainHp();
			reduceHeroHp();
			doubleAttack();
			
	})
}
attack();
