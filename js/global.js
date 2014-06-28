// start jQuery
$(function(){


/**LOADING**/

$(window).load(function(){
  $('#loading').fadeOut(500);
});

/********** BASICS***********/

	/* Nice Scroll */
	var nice = $('html').getNiceScroll();

	if( $(window).width() >= 768 ){
		$(window).scroll(function(){
			if( $(window).scrollTop() <= eval( $(window).height() - 10 ) ){
				$('html').niceScroll({ horizrailenabled: false });
				$('html').getNiceScroll().show();
			}else if( $(window).scrollTop() <= 0){
				$('html').getNiceScroll().hide();
			}else{
				$('html').niceScroll();
				$('html').getNiceScroll().show();
			}
		});
	}else{
		$('html').niceScroll();
	}

	$(window).resize(function(){
		if( $(window).width() < 768 ){
			$('html').niceScroll({ horizrailenabled: false });
			$('html').getNiceScroll().show();
		}
	})

	/* Tooltip */
	$('body a, body img').tooltip();

	/* Go Top - Visible */
	$(window).scroll(function(){
		if( $(window).scrollTop() >= $(window).height() ){
			$('.go-top').show();
		}else{
			$('.go-top').hide();
		}
	});
		/* Go Top - Action */
		$('.go-top').click(function(){
			$('html, body').stop().animate({scrollTop: 0}, 500);
		});
			/* Go Top - Tooltip */
			$('.go-top').tooltip();
	
/*********NAVBAR LINKS**********/

	$('.nav li a[href^="#"], footer nav a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 300, 'swing', function () {
			window.location.hash = target;
		});
	});

/***********NAV BAR FIXED********/

$(window).scroll(function(){
	if( $(window).scrollTop() >= $(window).height() ){
		$('.navbar-default').addClass('fixed');
	}else{
		$('.navbar-default').removeClass('fixed');
	}
});

/***********HERO UNIT***********/

	/* Background Full Height  */
	$('header.big-intro-img').css('height', $(window).height()+'px');

	/* Windows Resize */
	$(window).resize(function(){
		$('header.big-intro-img').css('height', $(window).height()+'px');
	})

	/* Carousel */
	$('#introCarousel').carousel({
		interval: 4000, 
		pause: 'cycle'
	});

/************PORTFOLIO************/

$(function() {
  Grid.init();
});

/**********CAPABILITIES************/

$('.chart').easyPieChart({
	barColor   : '#00aeff',
	lineWidth  : 4,
	animate    : 3000,
	lineCap    : 'square',
	scaleColor : false
});

/********CONTACT FORM*************/

$('#contact input, #contact textarea').tooltip();
$('#contact #contact-subject').attr('x-webkit-speech', 'x-webkit-speech');

	/* Bootbox Callback */
	Example.init({
		"selector": ".bb-alert"
	});

$('#form-contact').submit(function(){

	/* Get Values */
	contact_name    = $('#contact-name').val();
	contact_email   = $('#contact-email').val();
	contact_subject = $('#contact-subject').val();
	contact_message = $('#contact-message').val();

	/* Validate Fields */
	if( contact_name == '' ){
		bootbox.alert("Please fill in all fields!", function() {
		  Example.show("All fields are required.");
		});
		return false;
	}else if( contact_email == '' ){
		bootbox.alert("Please fill in all fields!", function() {
		  Example.show("All fields are required.");
		});
		return false;
	
	}else if( contact_message == '' ){
		bootbox.alert("Please fill in all fields!", function() {
		  Example.show("All fields are required.'");
		});
		return false;
	}else{5
		return true;
	}
})

/**********TESTIMONIALS**********/

	/* All Parallax */
	$.stellar({
	    horizontalScrolling: false,
	    verticalOffset: 40
	});

$('#testimonialsCarousel').carousel({
	interval: 6000, 
	pause: 'cycle'
});

}); // end jQuery