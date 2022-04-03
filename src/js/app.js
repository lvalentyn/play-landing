import * as flsFunction from "./modules/functions.js";
import burger from "./modules/burger.js";
import filter from "./modules/filter.js";
import timer from "./modules/timer.js";
import slick from 'slick-carousel';
import $ from "jquery";
// plugins from npm

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// my modules
	filter();
	timer();
	burger('.js-burgermenu', '.js-burger-btn');

	// slick
	// setTimeout(function () {
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
	if ($('.js-game-box-slider').length) {
		$('.js-game-box-slider').slick({
			dots: false,
			infinite: true,
			arrows: false,
			speed: 300,
			slidesToShow: 1,
			variableWidth: true,
			mobileFirst: true,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
					adaptiveHeight: false
				}
			}, {
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					variableWidth: false,
					adaptiveHeight: false
				}
			}, {
				breakpoint: 1439,
				settings: {
					slidesToShow: 4,
					variableWidth: false,
					adaptiveHeight: false,
				}
			}]

		});
		$('.slick-dots button').html('');
	}
	if ($('.js-reviews-slider').length) {
		$('.js-reviews-slider').slick({
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
	// }, 2000);

	// for create webP dublicate
	flsFunction.isWebp();

});


