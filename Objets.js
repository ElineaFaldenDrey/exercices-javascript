

// -------- VARIABLE INITIALISATION --------------------------------

var tabWeapon = ["sword","none","knife","spike","kettle","baton"];
// -------- USEFULL FUNCTIONS --------------------------------------
function random(){ return Math.round(Math.random()*10 +10);}

function randomPetit(){ return Math.round(Math.random()*10 +5);}

function chooseWeapon(){
	let choice = Math.abs(Math.round(Math.random()*tabWeapon.length));
	console.log("VERIFICATIONS random weapons :"+ choice);
	console.log(tabWeapon[choice]);
	return tabWeapon[choice]; 
}

console.log(random());

// -------- OBJECTS DEFINITION -------------------------------------
var character = {
	name : "empty",
	level : 0,
	life : 0,
	force : 0,
	defense : 0,
	//characterDamages : this.force + this.weapon.damage,

	weapon : {
		name : "empty",
		damage : 0
	}

	/*function attack(){
		return;
	}

	function receiveDamage(ennemy){
		return this.life = this.life - ennemy.characterDamages;
	}*/
}


// -------- CREATION CHARACTERS -----------------------------------
var opponentCharacter = Object.create(character);
//debugger;
var mainCharacter = Object.create(character);
//			VERIFICATIONS
console.log("Name Before : " + opponentCharacter.name);
console.log("Level Before : " + opponentCharacter.level);
console.log("Life Before : " + opponentCharacter.life);
console.log("Force Before : " + opponentCharacter.force);
console.log("Weapon Before : " + opponentCharacter.weapon.name);

console.log("Name Before : " + mainCharacter.name);
console.log("Level Before : " + mainCharacter.level);
console.log("Life Before : " + mainCharacter.life);
console.log("Force Before : " + mainCharacter.force);
console.log("Weapon Before : " + mainCharacter.weapon.name);

// -------- INITIALISATION CHARACTERS -----------------------------

function initialisation(perso){

		perso.name = prompt("Veuillez entrer le nom de votre personnage: ");
		perso.level = 1;
		perso.life = random();
		perso.force = random();
		perso.defense = randomPetit();

		perso.weapon = Object.create(character.weapon);
		perso.weapon.name = chooseWeapon();
		return perso;
	}

	initialisation(opponentCharacter);
	initialisation(mainCharacter);

	//			VERIFICATIONS
console.log("Name After : " + opponentCharacter.name);
console.log("Level After : " + opponentCharacter.level);
console.log("Life After : " + opponentCharacter.life);
console.log("Force After : " + opponentCharacter.force);
console.log("Weapon After : " + opponentCharacter.weapon.name)

console.log("Name After : " + mainCharacter.name);
console.log("Level After : " + mainCharacter.level);
console.log("Life After : " + mainCharacter.life);
console.log("Force After : " + mainCharacter.force);
console.log("Weapon After : " + mainCharacter.weapon.name)