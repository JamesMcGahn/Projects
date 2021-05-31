$(function () {

	const $window = $(window);

	// Parallax Backgrounds


	$('section[data-type="background"]').each(function () {
		const $bgobj = $(this);

		$(window).scroll(function () {


			const yPos = -($window.scrollTop() / $bgobj.data('speed'));


			const coords = '50% ' + yPos + 'px';

			$bgobj.css({ backgroundPosition: coords });

		});
	});

});