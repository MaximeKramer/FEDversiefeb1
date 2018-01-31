//In dit script zorg ik dat wanneer er op de afbeelding van Moe wordt geklikt, de titel naar boven vliegt om de gebruiker te laten weten dat hier op geklikt moet worden. 


/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
//
//Window
var windowText = document.querySelector('div h2 a');
var windowClick = document.querySelector('button.window');

windowClick.addEventListener('click', function () {
	windowText.classList.toggle('open');
});