(function($){


	var rides_in_progress = false;
	var rides_start_post = 5;
	var rides_container = $("#s-rides");
	var rides_window_scroll;

	function ridesAjax() {
		if( !rides_container.length ){return};

		rides_window_scroll = $(window).scrollTop() + $(window).height();

		if ( !rides_in_progress && rides_window_scroll > rides_container.offset().top + rides_container.outerHeight() - 400 ){

			rides_in_progress = true;

			$.ajax({
			    url: 'rides-items-ajax.html',
			    success: function (data) {
			    	rides_container.find(".posts-h").append(data);
			    },
			  	error: function(jqXHR, textStatus, errorThrown) {
			  	},

			});
            rides_in_progress = false;
		};
	};

	function InitRideSlider(){
		var ride_slider = $('#ride_sl');
		if( !ride_slider.length ){return};

		var ride_navigation = $('#ride_nv');

		ride_slider.slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: ride_navigation,
		  autoplay: true,
		  infinite: true,
		  mobileFirst: true,
		  adaptiveHeight: true,
		 	responsive: [
				{
				  breakpoint: 1200,
				  settings: {
		  			arrows: true,
				  }
				},
			]
		});
		ride_navigation.slick({
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  asNavFor: ride_slider,
		  dots: false,
		  arrows: false,
		  centerMode: true,
		  focusOnSelect: true,
		  centerPadding: "0",
		  autoplay: true,
		  infinite: true,
		  mobileFirst: true,
		 	responsive: [
				{
				  breakpoint: 1200,
				  settings: {
				    slidesToShow: 4
				  }
				},
				{
				  breakpoint: 992,
				  settings: {
				    slidesToShow: 4
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
				    slidesToShow: 3
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
				    slidesToShow: 3
				  }
				}
			]
		});

	};

	function birthdayMasonry() {

		var container = document.querySelector('#birthday');

		if (container) {
			var grid_sizer = document.querySelector('#birthday >.birthday_i:first-of-type');

			var msnry = new Masonry( container, {
			  columnWidth: grid_sizer,
			  percentPosition: true,
			});

			$(window).on( "load", function(){
				msnry.layout()
			});

		};
	};

	$(document).ready(function(){
		$('#h-slider').carousel()
		ridesAjax();
		InitRideSlider();
		birthdayMasonry();
	});


	$(window).on( "load", function(){});
	$(window).on( "resize", function(){});
	$(window).on( "scroll", function() {
		ridesAjax();
	});

})(jQuery);









