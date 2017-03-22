/*var max = Math.max(7,5,-12,6,32,18,14,-2);

alert(max);*/
// EXERCICE MATH
/*
var tableauChiffres= [1,2,3,4,5];

var floatBateau = 10.4;
var couleBateau = Math.floor(floatBateau);
var couleBateau2 = Math.ceil(floatBateau);

console.log(couleBateau);
console.log(couleBateau2);

var randomValue = Math.random()*50 +50;

console.log(randomValue);

var randomValue2 = Math.random();
randomValue2 = Math.round(randomValue2);

console.log(randomValue2);

var randomValue3 = Math.random()*10;

console.log(Math.round(randomValue3));

var randomValue4 = (Math.random()*10 -10) + (Math.random()*10);

console.log(Math.round(randomValue4));

*/// ----------------  EXERCICES JUSTE PRIX  -----------------------


// --- DECLARATION VARIABLES ---
/*
var minValue = 20;
var maxValue = 80;
var essai= 0;
var price= 0;

/// --- CREATION RANDOM ---

function prix(){
	return price = Math.round(Math.random()*(maxValue - minValue) + minValue);
}

/// --- MECANISME DU JEU


function verificationChiffre(test){

	
	// Partie où on demande à l'utilisateur de deviner un prix //	
	essai = parseInt(prompt("Entrer un nombre entre "+ minValue + " et " + maxValue));

	// VERIFICATION //
	console.log(price);
	console.log(essai);


	if(test == price ){
		alert("C'est le JUSTE PRIX !!");
		
	}
	else if(test < price){
		alert("C'est plus !");
	}
	else if(test > price){
		alert("C'est moins...");
	}
	
}

/// Main Init:

prix();

do
{
	verificationChiffre(essai);
}
while(essai != price || essai == q);*/