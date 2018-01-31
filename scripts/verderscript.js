/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//In dit script zorg ik dat er door middel een transavia vliegtuig de systeem status wordt aangegeven.

var plane = document.querySelector('img.status');
var buttonStatus1 = document.querySelector('section button.planeFly');

buttonStatus1.addEventListener('click', function () {
	plane.classList.toggle('fly');
});