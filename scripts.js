jQuery( document ).ready(function( $ ) {
	scroll();
	dataOpen();

	jQuery(window).bind('scroll resize',function() {
		scroll();
	});
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


// Scroll
function scroll() {

	width = jQuery(window).width();
	scrollTop = jQuery(window).scrollTop();

	if(scrollTop > 50){
		jQuery('.header, body').addClass('fixed');
	} else {
		jQuery('.header, body').removeClass('fixed');
	}

}


function dataOpen(){

	width = jQuery(window).width();

	// Scroll
	jQuery('a[data-scroll="true"], .data-scroll a').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		target = jQuery(target);

		jQuery('html, body').stop().animate({
			'scrollTop': target.offset().top - 70
		}, 900, 'swing', function () {
			//window.location.hash = target;
		});
	});


    // Menu
    jQuery('[data-open="menu"]').click(function(e){
        e.preventDefault();

        jQuery('.header').toggleClass('active');
        jQuery('.header').toggleClass('opened');
    });


    // Submenu
    jQuery('.header .navigation .menu li.menu-item-has-children > a').click(function(e) {

        if(width < 1200){
            e.preventDefault();

            if (jQuery('.header .navigation .menu li').hasClass('open-menu')){
                jQuery('.header .navigation .menu li').removeClass('open-submenu');
            }

            jQuery(this).parent().toggleClass('open-submenu');
        }

    });


}
