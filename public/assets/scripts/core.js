// Core Scripts
$(document).ready(function() {

	// Mobile menu
	$(document).on('click', 'header nav .hamburger-icon .fa', function() {
		$('header nav').toggleClass('show-mobile-menu');
	});

	// Close mobile menu
	$(document).on('click', 'main', function() {
		$('header nav').removeClass('show-mobile-menu');
	});

});