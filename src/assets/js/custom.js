/* ---------------------------------------------
 common scripts
 --------------------------------------------- */

;(function () {
	"use strict"; // use strict to start
	
		// mobile menu script
		$('.nav').slicknav();

		// scrollUp
		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
	        return false;
	    });	
		
		// Image overlay Script
		if (Modernizr.touch) {
			// show the close overlay button
			$(".close-overlay").removeClass("hidden");
			// handle the adding of hover class when clicked
			$(".img").click(function(e){
				if (!$(this).hasClass("hover")) {
					$(this).addClass("hover");
				}
			});
			// handle the closing of the overlay
			$(".close-overlay").click(function(e){
				e.preventDefault();
				e.stopPropagation();
				if ($(this).closest(".img").hasClass("hover")) {
					$(this).closest(".img").removeClass("hover");
				}
			});
		} else {
			// handle the mouseenter functionality
			$(".img").mouseenter(function(){
				$(this).addClass("hover");
			})
			// handle the mouseleave functionality
			.mouseleave(function(){
				$(this).removeClass("hover");
			});
		}
		
})(jQuery);

	