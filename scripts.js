$( document ).ready(function( $ ) {
	scroll();
	dataOpen();

	$(window).bind('scroll resize',function() {
		scroll();
	});
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


// Scroll
function scroll() {

	width = $(window).width();
	scrollTop = $(window).scrollTop();

	if(scrollTop > 50){
		$('.header, body').addClass('fixed');
	} else {
		$('.header, body').removeClass('fixed');
	}

}


function dataOpen(){

	width = $(window).width();

	// Scroll
	$('a[data-scroll="true"], .data-scroll a').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		target = $(target);

		$('html, body').stop().animate({
			'scrollTop': target.offset().top - 70
		}, 900, 'swing', function () {
			//window.location.hash = target;
		});
	});


    // Menu
    $('[data-open="menu"]').click(function(e){
        e.preventDefault();

        $('.header').toggleClass('active');
        $('.header').toggleClass('opened');
    });


    // Submenu
    $('.header .navigation .menu li.menu-item-has-children > a').click(function(e) {

        if(width < 1200){
            e.preventDefault();

            if ($('.header .navigation .menu li').hasClass('open-menu')){
                $('.header .navigation .menu li').removeClass('open-submenu');
            }

            $(this).parent().toggleClass('open-submenu');
        }

    });


}

function recaptchaCallback() {
    $('#submitBtn').prop('disabled', false);
    $('#verifica').hide();
    $('#sucess').show();

    $('#submitBtnEN').prop('disabled', false);
    $('#verificaEN').hide();
    $('#sucessEN').show();

}

function recaptchaExpiredCallback() {
    // Resetear recaptcha en caso de que el captcha expire
    $('#submitBtn').prop('disabled', true);
    grecaptcha.reset();
    $('#sucess').hide();

    $('#submitBtnEN').prop('disabled', true);
    grecaptcha.reset();
    $('#sucessEN').hide();

}

function recaptchaErrorCallback() {
    // Resetear recaptcha en caso de error por network connectivity
    $('#submitBtn').prop('disabled', true);
    grecaptcha.reset();

    $('#submitBtnEN').prop('disabled', true);
    grecaptcha.reset();

}
