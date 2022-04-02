import * as flsFunction from "./modules/functions.js";
import burger from "./modules/burger.js";
import slick from 'slick-carousel';
import $ from "jquery";
// plugins from npm

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	flsFunction.isWebp();

	burger('.js-burgermenu', '.js-burger-btn');

	setTimeout(function () {
		// team slider
		if ($('.js-banner-slider').length) {
			$('.js-banner-slider').slick({
				lazyLoad: 'ondemand',
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 5000,
				fade: false,
				adaptiveHeight: true,
				swipe: false,
				mobileFirst: true
			});
			$('.slick-dots button').html('');
		}
	}, 2000);

});


