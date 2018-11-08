/*--A BLOG PROJECT FOR PROJECT MANAGEMENT S.Y. 2018-2019-->
<!--STI COLLEGE OF NOVALICHES-INFORMATION TECHNOLOGY DEPARTMENT-->
<!--TITLE OF THE PROJECT-ENVIRONMENTAL AWARENESS(SPECIFIC PROBLEMS ONLY)-->
<!--THIS HTML FILE IS FOR VIEWING ONLY, PLEASE GIVE CREDITS TO THE OWNER OF THE FILE-->
<!--alphazoom@protonmail.com-->*/
(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Gallery.
			$('.gallery').poptrox();

	});

})(jQuery);
$(document).ready(function()
				{
					$('.carousel').carousel();
					//function for carousel-slider
					setInterval(function()
					{
						$('.carousel').carousel('next');
					}, 2000);
				});
