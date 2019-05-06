$(document).ready(function(){

//nav smooth scrolling
	$('.smooth').click(function(e) {

		e.preventDefault();

		const targetElement = $(this).attr('href');
		const targetPosition = $(targetElement).offset().top;
		$('html, body').animate({scrollTop: targetPosition -50}, 'slow');
	});

//autoclose mobile menu
    if($(window).width() < 992) {
	 $('.navbar-nav li').click(function(){ 
	   $('.navbar-toggler').click();
	  });
	}

//hamburger animation
	var $hamburger = $('.hamburger');
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass('is-active');
	});

	$('.marquee').marquee({
	    duration: 10000,
	    gap: 5,
	    delayBeforeStart: 0,
	    direction: 'left',
	    pauseOnHover: true,
	    duplicated: true
	});

	$('.marquee-baners').marquee({
	    duration: 10000,
	    gap: 5,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true
	});

	$(window).scroll(function() {

	})

})