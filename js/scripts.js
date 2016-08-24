// Smooth scroll
var smoothScroll = function() {
	// Smooth scroll
	$('a[href*=#]').click(function() {
	      var target = $(this.hash);
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	  });
}

// Show navigation bar
portfolio.showNavBar = function() {
	// Store the navbar in a variable
	var menu = $('#navigation');
	// Now we target the scroll
	$(window).scroll(function () {
		// the window scroll
	  var y = $(this).scrollTop();
	  // This value is equivalent to -100 of the #about section
	  var z = $('#about').offset().top - 100;
	  // If the scroll is greater than or equal to -100 of #about
	  if (y >= z) { 
	  	// We will remove the .hide-nav class (which pushes a set amount
	  	// above the page)
	  	// Then we will add the .show-nav class
	  	menu.removeClass('hide-nav').addClass('show-nav');
	  }
	  else { 
	  	// If that isn't the case, we will do the opposite and 
	  	// keep the nav hidden
	  	menu.removeClass('show-nav').addClass('hide-nav'); 
	  }
	});
};
// Show current section on the nav
portfolio.showCurrentSection = function() {
	// Storing each class in a variable
	var sections = $('.section'),
	    links = $('.scroll.link');
	    // Now we target the window
	$(window).scroll(function() {
	  "use strict";
	  // Where we are on the screen
	  var currentPosition = $(this).scrollTop();
	  // Failsafe
	  links.removeClass('selected');
	  // Loop through
	  sections.each(function() {
	  	// Accounting for the fixed header
	      var top = $(this).offset().top - 75,
	      // Height of the sfreen
	          bottom = top + $(this).height();
	      // If the current position is greater or equal to the top and 
	      // is less than or eqaul to the bottom
	      if (currentPosition >= top && currentPosition <= bottom) {
	      	// The current item we're on will take on the class of 
	      	// '.selected', which will change the color
	          $('a[href="#' + this.id + '"]').addClass('selected');
	      }
	  }); 
	});
}

portfolio.init = function() {
	smoothScroll();
	portfolio.showNavBar();
	portfolio.showCurrentSection();
};

$(document).ready(function () {
	portfolio.init();
});