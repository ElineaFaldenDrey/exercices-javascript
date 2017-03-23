

// -------- VARIABLE INITIALISATION --------------------------------

var tabWeapon = ["none","sword","knife","spike","kettle","baton"];
var tabWeaponDamage = [1,5,3,4,2,2];

// -------- USEFULL FUNCTIONS --------------------------------------

function random(){ return Math.round(Math.random()*10 +10);}

function randomPetit(){ return Math.round(Math.random()*10 +5);}

function choice(){ return Math.abs(Math.floor(Math.random()*tabWeapon.length));}


// -------- WEAPON DEFINITION ---------------------------------------

function chooseWeapon(){
	
	console.log("Weapon : " + tabWeapon[choice()]);
	return tabWeapon[choice()]; 
}

function getWeaponDamages(){
	console.log("Damages : " + tabWeaponDamage[choice()]);
	return tabWeaponDamage[choice()];
}

// -------- COMBAT FUNCTIONS -----------------------------------------

function attack(){
		let attackValue = this.weaponDamages + this.force;
		console.log("Attack value = "+ attackValue);
		return attackValue;
}

function receiveDamage(ennemy){
		return this.life = this.life - (ennemy.weaponDamages + ennemy.force);
}

// -------- OBJECTS DEFINITION -------------------------------------

var character = {
	name : "empty",
	level : 0,
	life : 0,
	force : 0,
	defense : 0,
	weaponName : "",
	weaponDamages : 0
}


// -------- CREATION CHARACTERS -----------------------------------

var opponentCharacter = Object.create(character);
var mainCharacter = Object.create(character);

// -------- INITIALISATION CHARACTERS -----------------------------

function initialisation(perso){

		perso.name = prompt("Veuillez entrer le nom de votre personnage: ");
		perso.level = 1;
		perso.life = random();
		perso.force = random();
		perso.defense = randomPetit();

		perso.weaponName = chooseWeapon();
		perso.weaponDamages = getWeaponDamages();
		return perso;
	}

	initialisation(opponentCharacter);
	initialisation(mainCharacter);

	//			VERIFICATIONS ---------------------------------------------
console.log("Name After : " + opponentCharacter.name);
console.log("Level After : " + opponentCharacter.level);
console.log("Life After : " + opponentCharacter.life);
console.log("Force After : " + opponentCharacter.force);
console.log("Weapon After : " + opponentCharacter.weaponName);
console.log("Weapon Damages After : " + opponentCharacter.weaponDamages);

console.log("Name After : " + mainCharacter.name);
console.log("Level After : " + mainCharacter.level);
console.log("Life After : " + mainCharacter.life);
console.log("Force After : " + mainCharacter.force);
console.log("Weapon After : " + mainCharacter.weaponName);
console.log("Weapon Damages After : " + mainCharacter.weaponDamages);
// -------- COMBATS PHASE ----------------------------------------------

