$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - $("nav").height()
				}, 1000);
				return false;
			}
		}
	});
});


$(document).ready(function(){

	let nav = $("nav");
	nav_offset = nav.offset().top;
	$("#heightholder").height(nav.height());


	nav.toggleClass('fixed-to-top', $(window).scrollTop() > nav_offset );

	$(window).scroll(function() {
		nav.toggleClass('fixed-to-top', $(window).scrollTop() > nav_offset );
		//console.log( $("nav").offset().top  );
	});
});
