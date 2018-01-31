//In dit script zorg ik ervoor dat de gebruiker feedback krijgt wanneer hij/zij een verhaal leuk vind, het wolkje komt naar voren en draait.


/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Liken

var divlike = document.querySelector('div.liker');
var button = document.querySelector('button.cloudlike');


button.addEventListener('click', function () {
	divlike.classList.toggle('liken');
});