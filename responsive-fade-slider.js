$(function() {

//--------------------------------------------------------------//
// MAIN SLIDER CONFIGURATION STARTS HERE
//--------------------------------------------------------------//
	//////////////////////////////////////////
	//	SLIDER PREV + NEXT CONTROLS BUTTONS. 
	//	DO NOT CHANGE ANYTHING IN THIS SECTION
	//////////////////////////////////////////
	var $prev = $('.prev');
	var $next = $('.next');


	//////////////////////////////////////////
	//	SLIDER NAVIGATION CONTROLS BUTTONS
	// 	DO NOT CHANGE ANYTHING IN THIS SECTION
	//////////////////////////////////////////
	var $slider_nav = $('.slider-nav');

	//////////////////////////////////////////
	//	SLIDER OBJECTS
	//	DO NOT CHANGE ANYTHING IN THIS SECTION
	//////////////////////////////////////////
	var $slider = $('.slider');
	var $slide_item = $('.slide-item');
	var $first_slide_item = $('.slide-item:first-child');
	var $last_slide_item = $('.slide-item:last-child');
	var $frame = $('.frame');

	//////////////////////////////////////////
	//	SLIDER SETTINGS
	// 	DO NOT CHANGE ANYTHING IN THIS SECTION
	//////////////////////////////////////////
	//-- Count --//
	var count = 0;

	//-- Prev & Next Values --//
	var next_val = '-=100' + '%';
	var prev_val = '+=100' + '%';

	//-- Slider Values --//
	var amount_of_slide_item = $slide_item.length;
	var slider_width_slide_fx = amount_of_slide_item * 100 + 100 + '%';
	var slider_width_fade_fx = 100 + '%';
	var slider_height = 100 + '%';
	var slide_item_width = 100 / (amount_of_slide_item + 1) + '%';








	//////////////////////////////////////////
	//	SLIDER VALUES
	// 	YOU CAN CHANGE VALUES IN SECTION
	//////////////////////////////////////////

	//-- Transitiion Values --//
	var slide_pause = 10000; // Pause between slides. 1 sec = 1000; 2 sec = 2000 etc.
	var animation_speed = 1000; // Animation duration. 

	//-- Slider Nav settings --//
	var slider_nav_color = '#ccc'; // Color of slider nav when active state. Must match color of hover state.


	//-- Slide item number --//
	/* 
		- Add the amount of slides you have.
		- 'slide_item_1' is your FIRST SLIDE. DO NOT CHANGE THE VALUE.
		- 'end_of_slide' is your LAST SLIDE. DO NOT CHANGE THE VALUE.
		- Anything between 'slide_item_1' & 'end_of_slide', you can assign its value;
		- To assign  the value correctly, simply subtract 1 from the slide item number.
		e.g 'var slide_item_5 = 4';
	*/
	var slide_item_1 = 0;
	var slide_item_2 = 1;
	var slide_item_3 = 2;
	var slide_item_4 = 3;
	var end_of_slide = $slide_item.length - 1;

	//--------------------------------------------------------------//
	// MAIN SLIDER CONFIGURATION ENDS HERE
	//--------------------------------------------------------------//






//--------------------------------------- FADING EFFECT STARTS HERE ---------------------------------------//

	///////////////////////////////////////////////
	//	DEFAULT SLIDER SETTINGS +----- START HERE
	//
	//	DO NOT CHANGE ANYTHING IN THIS SECTION
	///////////////////////////////////////////////
	
	//-- slider --//
	$slider.css('width', slider_width_fade_fx);
	$slider.css('height', slider_height);
	$slider.css('position', 'relative');

	//-- slide item --//
	$slide_item.css('width', slider_width_fade_fx);
	$slider.css('height', slider_height);
	$slide_item.css('float', 'none');
	$slide_item.css('position', 'absolute');
	$slide_item.eq(0).css('position', 'relative');
	$slide_item.css('top', 0);
	$slide_item.css('display', 'block');
	$slide_item.css('opacity', 0);
	$slide_item.eq(0).css('opacity', 1);

	///////////////////////////////////////////////
	//	DEFAULT SLIDER SETTINGS +----- END HERE
	///////////////////////////////////////////////


	/////////////////////////////////////////////////
	//	HIDE PREV AND NEXT BUTTONS +--- STARTS HERE
	// 	DO NOT CHANGE ANYTHING IN THIS SECTION
	/////////////////////////////////////////////////
	$frame.on({
		mouseenter: function() {
			$('.ctrl_btn').removeClass('hide-btn');
			$('.ctrl_btn').addClass('show-btn');
		},
		mouseleave: function() {
			$('.ctrl_btn').removeClass('show-btn');
			$('.ctrl_btn').addClass('hide-btn');
		}
	});
	/////////////////////////////////////////////////
	//	HIDE PREV AND NEXT BUTTONS +--- ENDS HERE
	/////////////////////////////////////////////////



	//////////////////////////////////////////////
	//	AUTOMATIC FADE IN/OUT +----- STARTS HERE
	//	DO NOT CHANGE ANYTHING IN THIS SECTION
	/////////////////////////////////////////////

	setInterval(function() {
		count++;
		$slide_item.eq(count - 1).animate({'opacity': 0});
		$slide_item.eq(count).animate({'opacity': 1});
		$slider_nav.css('background-color', '');
		$slider_nav.eq(count).css('background-color', slider_nav_color);

		if(count == amount_of_slide_item) {
			count = 0;
			$slide_item.eq(0).animate({'opacity': 1});
			$slider_nav.css('background-color', '');
		$slider_nav.eq(count).css('background-color', slider_nav_color);

		}
		console.log('the current count is = ' + count);
		console.log('the amount of slides = ' + amount_of_slide_item);
	}, slide_pause);
	/////////////////////////////////////////////
	//	AUTOMATIC FADE IN/OUT +----- ENDS HERE
	////////////////////////////////////////////




	///////////////////////////////////////////////
	//	PREV AND NEXT BUTTONS +--- STARTS HERE
	//	DO NOT CHANGE ANYTHING IN THIS SECTION
	///////////////////////////////////////////////

	$next.click(function() {
		count++;
		$slide_item.eq(count - 1).animate({'opacity': 0});
		$slide_item.eq(count).animate({'opacity': 1});
		$slider_nav.css('background-color', '');
		$slider_nav.eq(count).css('background-color', slider_nav_color);

		if(count == amount_of_slide_item) {
			count = 0;
			$slide_item.eq(amount_of_slide_item).animate({'opacity': 0});
			$slide_item.eq(0).animate({'opacity': 1});
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);

		}
		console.log('the current count is = ' + count);
		console.log('the amount of slides = ' + amount_of_slide_item);	
	});

	$prev.click(function() {
		if(count == 0) {
			count = end_of_slide;
			//$slide_item.animate({'opacity':0});
			$slide_item.eq(end_of_slide).animate({'opacity':1});
			$slider_nav.css('background-color', '');
		$slider_nav.eq(count).css('background-color', slider_nav_color);
			console.log('the current count is = ' + count);
			console.log('you have reached the end of the slide');
		} else {
			count--;
			$slide_item.eq(count + 1).animate({'opacity': 0});
			$slide_item.eq(count).animate({'opacity': 1});
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			console.log('the current count is = ' + count);
		}
	});
	///////////////////////////////////////////////
	//	PREV AND NEXT BUTTONS +--- ENDS HERE
	///////////////////////////////////////////////




	///////////////////////////////////////////////
	//	SLIDER NAVIGATION +--- STARTS HERE
	//
	// 	YOU CAN CHANGE CONTENT IN THIS SECTION
	// 	SEE INSTRUCTIONS BELOW
	///////////////////////////////////////////////
	
	/* 
		INSTRUCTIONS
		1. COPY AND PASTE THE TEMPLATE TO DUPLICATE EACH SLIDE
		2. REPLACE THE 'xx' WITH THE CORRESPONDING SLIDE_ITEM_X VALUE;
		3. PASTE TEMPLATE BETWEEN START AND END POINTS.

		//------- COPY TEMPLATE FROM HERE -------//

		//--SLIDE (INSERT SLIDE NUMBER HERE) --//
		$slider_nav.eq(xx).click(function() { // Repl
			count = xx;
			if(count < amount_of_slide_item) {
				count = xx;
				$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
				$slider_nav.css('background-color', '');
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				//console.log('the current count is ' + count);
			} else {
				count = xx;
				$slider.animate({'margin-left': count * -100 + '%'}, animation_speed);
				$slider_nav.css('background-color', '');
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				//console.log('the current count is ' + count);
			}
		});

		//------- COPY TEMPLATE TO HERE -------//

	*/

	//-- SLIDE ITEM 1 / FIRST SLIDE. DO NOT CHANGE --//
	$slider_nav.eq(slide_item_1).click(function() {
		if(count == slide_item_1) {
			count = slide_item_1;
			$slide_item.css('opacity', 0);
			$slide_item.eq(count).css('opacity', 1);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			console.log('the current count is = ' + count);

		} else {
			if(count > slide_item_1) {
				$slide_item.eq(count).animate({'opacity': 0});
				$slide_item.eq(slide_item_1).animate({'opacity': 1});
				count = slide_item_1;
				$slider_nav.css('background-color', '');
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				console.log('the current count is = ' + count);
			}
		}
	});

	//------------------- START POINT - ADD THE REST OF SLIDE ITEM NUMBER BELOW HERE -------------------//

	//-- SLIDE ITEM 2 --//
	$slider_nav.eq(slide_item_2).click(function() {
		if(count == slide_item_2) {
			count = slide_item_2;
			$slide_item.css('opacity', 0);
			$slide_item.eq(count).css('opacity', 1);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			console.log('the current count is = ' + count);

		} else {
			if(count > slide_item_2 || count < slide_item_2) {
				$slide_item.eq(count).animate({'opacity': 0});
				$slide_item.eq(slide_item_2).animate({'opacity': 1});
				count = slide_item_2;
				$slider_nav.css('background-color', '');
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				console.log('the current count is = ' + count);
			}
		}
	});

	//-- SLIDE ITEM 3 --//
	$slider_nav.eq(slide_item_3).click(function() {
		if(count == slide_item_3) {
			count = slide_item_3;
			$slide_item.css('opacity', 0);
			$slide_item.eq(count).css('opacity', 1);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			console.log('the current count is = ' + count);

		} else {
			if(count > slide_item_3 || count < slide_item_3) {
				$slide_item.eq(count).animate({'opacity': 0});
				$slide_item.eq(slide_item_3).animate({'opacity': 1});
				count = slide_item_3;
				$slider_nav.css('background-color', '');
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				console.log('the current count is = ' + count);
			}
		}
	});

	//-- SLIDE ITEM 4 --//
	$slider_nav.eq(slide_item_4).click(function() {
		if(count == slide_item_4) {
			count = slide_item_4;
			$slide_item.css('opacity', 0);
			$slide_item.eq(count).css('opacity', 1);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			console.log('the current count is = ' + count);

		} else {
			if(count > slide_item_4 || count < slide_item_4) {
				$slide_item.eq(count).animate({'opacity': 0});
				$slide_item.eq(slide_item_4).animate({'opacity': 1});
				count = slide_item_4;
				$slider_nav.css('background-color', '');
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				console.log('the current count is = ' + count);
			}
		}
	});

	//------------------- END POINT - ADD THE REST OF SLIDE ITEM NUMBER ABOVE HERE -------------------//

	//-- END OF SLIDE. DO NOT CHANGE --//
	$slider_nav.eq(end_of_slide).click(function() {
		if(count == end_of_slide) {
			count = end_of_slide;
			$slide_item.css('opacity', 0);
			$slide_item.eq(count).css('opacity', 1);
			$slider_nav.css('background-color', '');
			$slider_nav.eq(count).css('background-color', slider_nav_color);
			console.log('the current count is = ' + count);

		} else {
			if(count > end_of_slide || count < end_of_slide) {
				$slide_item.eq(count).animate({'opacity': 0});
				$slide_item.eq(end_of_slide).animate({'opacity': 1});
				count = end_of_slide;
				$slider_nav.css('background-color', '');
				$slider_nav.eq(count).css('background-color', slider_nav_color);
				console.log('the current count is = ' + count);
			}
		}
	});
	///////////////////////////////////////////////
	//	SLIDER NAVIGATION +--- ENDS HERE
	///////////////////////////////////////////////
//--------------------------------------- FADING EFFECT ENDS HERE ---------------------------------------//

});