/*

Carousel Plugin
To use: Select your Carousel shelf wrapper , then call "makeCarouselFor" with the selector for your navigationleft, navigatorRight,carousel, 
animation elements.

$('.shelf-wrapper').makeCarouselFor('.nav-arrow-left', '.nav-arrow-right', '.carousel-wrapper', 'ul.shelf > li'); */
// Don't forget to add your own stylesheet.

$(document.head).append('<link rel="stylesheet" type="text/css" href="gymnasium-carousel/gymnasium-carousel-1.0.css">');


$.fn.makeCarouselFor =  function(nleft, nRight, carouselSelecter, animatinSelecter) {
	// Set up our carousel.
	var $shelfwr = this;
	var $naviL = $(nleft);
	var $naviR = $(nRight),
		$carousel = $(carouselSelecter),
		$animaS = $(animatinSelecter);
	$carousel.cycle({
		fx: 'scrollHorz',
		speed: 400,
		height: $carousel.height(),
		width: $carousel.width(),
		fit: true
	}).cycle('pause');

	// Set up the carousel buttons.
	$naviL.click(function() {
		$carousel.cycle('prev');
	});
	$naviR.click(function() {
		$carousel.cycle('next');
	});

	// Animate in.
	$animaS.animate({ top: 0, left: 0 }, 700, 'easeOutBounce');

	// Set up hover effect.
	$animaS.hover(
		function() { $(this).children('.meta').stop().animate({ bottom: 0 }, 250) },
		function() { $(this).children('.meta').stop().animate({ bottom: -22 }, 100) }
	)

};
