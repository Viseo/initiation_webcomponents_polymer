$(function(){
	//ajout de l'évènement clique sur les cartes
	$(".card").click(function (){
		//On toggle les classes flippedFront et flippedBack pour faire tourner la carte
		$(this).find(".front").toggleClass("flippedFront");
		$(this).find(".back").toggleClass("flippedBack");
	});

});