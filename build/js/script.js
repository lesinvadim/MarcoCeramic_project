$(document).ready(function(){
	$('.slider-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		fade: false,
		adaptiveHeight: true,
		infinite: false,
		useTransform: true,
		speed: 400,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
	});

	$('.slider-nav')
		.on('init', function(event, slick) {
			$('.slider-nav .slick-slide.slick-current').addClass('is-active');
		})
		.slick({
			slidesToShow: 6,
			slidesToScroll: 6,
			arrows: false,
			dots: false,
			focusOnSelect: false,
			infinite: false,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			}, {
				breakpoint: 640,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
			}
			}, {
				breakpoint: 420,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
		}
			}]
		});

	$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
		$('.slider-nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});

	$('.slider-nav').on('click', '.slick-slide', function(event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');

		$('.slider-single').slick('slickGoTo', goToSingleSlide);
	});

	$('.offer-slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
		}
		}]
	});

	$('.burger-trigger').click(function(){
		$('.burger-menu-toggle').toggleClass('openned');
	})
	$(document).click(function(event) {
			if ($(event.target).closest(".burger-trigger").length ) return;
			$('.burger-menu-toggle').removeClass('openned');
			event.stopPropagation();
	});

	$('.phone').click(function(){
		$('.phone-toggle').toggleClass('openned');
	})
	$(document).click(function(event) {
			if ($(event.target).closest(".phone").length || $(event.target).closest(".phone-toggle").length) return;
			$('.phone-toggle').removeClass('openned');
			event.stopPropagation();
	});

	$('.user').click(function(){
		$('.user-toggle').toggleClass('openned');
	})
	$(document).click(function(event) {
			if ($(event.target).closest(".user").length || $(event.target).closest(".user-toggle").length) return;
			$('.user-toggle').removeClass('openned');
			event.stopPropagation();
	});

	$(document).ready(function() {
		$('.minus').click(function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
		});
		$('.plus').click(function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
		});
	});

	$('.basket').click(function(){
		$('.basket-toggle').toggleClass('openned');
	})
	$(document).click(function(event) {
			if ($(event.target).closest(".basket").length || $(event.target).closest(".basket-toggle").length) return;
			$('.basket-toggle').removeClass('openned');
			event.stopPropagation();
	});

});