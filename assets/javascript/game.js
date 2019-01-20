var playerChosen = false;
var enemyChosen = false;
var resetButtonAppended = false;
var yourPlayer = "";
var enemiesTochoose = "";
var enemy = "";
var attackPower = $(".hero").data("attack");
var counterAttackPower = $(".villain").data("counterattack");
var heroHp = $(".hero .health").text();
var villainHp = $(".villain .health").text();

function selectHero(){
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
}
selectHero();

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

function appendResetButton(){
	// resetButtonAppended = false;
	if (resetButtonAppended == false) {
		var resetButton = $("<button>");		
		resetButton.text("Reset");
		$(".messageDiv").append(resetButton);
		resetButtonAppended = true;
		}else {
			return;
		}
		resetButton.on("click",function(){
			reset();
		});
	
}

function reset(){
	// $(".heroDiv").empty();
	// $(".enemiesDiv").empty();
	// $(".defenderDiv").empty();
	// $(".playersToChoose").append($(".character"));
	location.reload();
}

function attack(){
	$("button").on("click", function(){
		heroHp = parseInt($(".hero .health").text());

		if ((playerChosen==false)&&(enemyChosen==false)){
			
			return null;
		}
		else if (heroHp <= 0) {
			$("#message").text("You lost! " + $(".villain .name").text() + " defeated "+
								"you by counter attacking with " +counterAttackPower+ " power");
			appendResetButton();
			
			return null;
		}
		else if ((villainHp<=0)&&($(".enemiesDiv").html()=="")) {
			$("#message").text("You won! " + $(".villain .name").text() + " was defeated");
			appendResetButton();
			
			return null;
		}
		else 
			reduceVillainHp();
			reduceHeroHp();
			doubleAttack();
			
	});
}
attack();
