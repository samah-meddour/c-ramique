let prenom = prompt("Quel est ton prenom ?");
let nom = prompt("Quel est ton nom ?");
let welcomTitle = document.getElementById("welcomTitle")
welcomTitle.innerText = "Initiez vous à la céramique " + prenom;
let isOk = prompt("Avez-vous déjà fait de la céramique ? répondre par oui ou par non");

if ((isOk == "oui") || (isOk == "OUI") || (isOk == "Oui"))
{
	//fair un truc
	console.log("l'utilisateur a fait de la céramique")
}
else if ((isOk == "non") || (isOk == "NON") || (isOk == "Non"))
{
	//faire autre chose
	console.log("l'utilisateur n'a pas fait de céramique")
}
else
{
	//faire un truc dans le cas ou l'utilisateur fais ce qu'il veut
	console.log("l'utilisateur ne répond pas à la question")
}
/*console.log("Bonjour " + prenom + "" + nom);
console.log("Comment vas-tu " + prenom + " ?"); 

alert("Salut " + nom + prenom + " !" )*/
